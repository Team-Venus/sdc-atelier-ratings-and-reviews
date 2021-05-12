// CONNECTION

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sdc_deploy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('successful database connection'));

// MODELS

const reviewsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  rating: Number,
  date: String,
  summary: String,
  body: String,
  recommend: String,
  reported: String,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
});
const Review = mongoose.model('Review', reviewsSchema, 'reviews');

const reviewsPhotosSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
});
const ReviewPhoto = mongoose.model('reviews_photos', reviewsPhotosSchema, 'reviews_photos');

const characteristicsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
});
const Characteristic = mongoose.model('Characteristic', characteristicsSchema, 'characteristics');

const characteristicReviewsSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  characteristic_id: Number,
  value: Number,
});
const CharacteristicReview = mongoose.model('CharacteristicReview', characteristicReviewsSchema, 'characteristic_reviews');

const productsToReviewsSchema = new mongoose.Schema({
  _id: Number,
  reviews: [Number],
});
const ProductToReviews = mongoose.model('ProductToReviews', productsToReviewsSchema, 'products_to_reviews');

const reviewsToPhotosSchema = new mongoose.Schema({
  _id: Number,
  photos: [Number],
});
const ReviewToPhotos = mongoose.model('reviews_to_photos', reviewsToPhotosSchema, 'reviews_to_photos');

const productsToCharacteristicsSchema = new mongoose.Schema({
  _id: Number,
  characteristics: [Number],
});
const ProductToCharacteristics = mongoose.model('ProductToCharacteristics', productsToCharacteristicsSchema, 'products_to_characteristics');

const reviewsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const ReviewToCharacteristicReviews = mongoose.model('ReviewToCharacteristicReviews', reviewsToCharacteristicReviewsSchema, 'reviews_to_characteristic_reviews');

const characteristicsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const CharacteristicToCharacteristicReviews = mongoose.model('CharacteristicToCharacteristicReviews', characteristicsToCharacteristicReviewsSchema, 'characteristics_to_characteristic_reviews');

// CONTROLLERS

const reviewsQuery = async (productId) => {
  // productId required
  const promiseQuery = ProductToReviews.findOne({ _id: productId });
  const result = promiseQuery
    .then(async (dataOne) => {
      const { reviews } = dataOne;
      const responseData = {};
      const reviewPromises = reviews.map((reviewId) => Review.findOne({ id: reviewId }));
      const reviewResults = await Promise.all(reviewPromises)
        .then((dataTwo) => dataTwo)
        .catch((errTwo) => {
          console.error('Err: look up reviews after reviews by product: ', errTwo);
        });
      const reviewPhotosIdsPromises = reviews.map((id) => ReviewToPhotos.findOne({ _id: id }));
      const reviewPhotosResults = await Promise.all(reviewPhotosIdsPromises)
        .then(async (dataThree) => {
          const photosFind = {};
          for (const photoIds of dataThree) {
            if (!photoIds) { continue; } // removes nulls
            const photosFindPromises = photoIds.photos.map((id) => ReviewPhoto.findOne({ id }));
            const photosFindQuery = await Promise.all(photosFindPromises)
              .then((dataFour) => dataFour)
              .catch((errFour) => {
                console.error('Err: look up photos after photos by review: ', errFour);
              });
            photosFind[photoIds._id] = photosFindQuery;
          }
          return await photosFind;
        })
        .then((dataFive) => dataFive)
        .catch((errThree) => {
          console.error('Err: look up photos by review: ', errThree);
        });
      responseData.reviewsResponse = reviewResults;
      responseData.reviewsPhotosResponse = reviewPhotosResults;
      return await responseData;
    })
    .catch((errOne) => {
      console.error('Err: look up reviews by product: ', errOne);
    });
  return await result;
};

const productDataQuery = async (productId) => {
  // productId required
  const promiseQuery = ProductToReviews.findOne({ _id: productId });
  const result = promiseQuery
    .then(async (dataOne) => {
      const { reviews } = dataOne;
      const responseData = {};
      const reviewPromises = reviews.map((reviewId) => Review.findOne({ id: reviewId }));
      const reviewsResults = await Promise.all(reviewPromises)
        .then((dataTwo) => dataTwo)
        .catch((errTwo) => `productDataQuery ERROR: look up reviews by reviewIds: ${errTwo}`);
      const prodCharacteristicsResults = await ProductToCharacteristics.findOne({ _id: productId })
        .then(async (dataThree) => {
          const { characteristics } = dataThree;
          const charsPromises = characteristics.map((id) => Characteristic.findOne({ id }));
          const charsResults = await Promise.all(charsPromises)
            .then((dataFour) => dataFour)
            .catch((errFour) => `productDataQuery ERROR: look up characteristics by characteristicsIds: ${errFour}`);
          return charsResults;
        })
        .catch((errThree) => `productDataQuery ERROR: look up characteristicIds by product: ${errThree}`);
      const charRevsProms = reviews.map((id) => ReviewToCharacteristicReviews.findOne({ _id: id }));
      const charRevsResults = await Promise.all(charRevsProms)
        .then(async (dataFive) => {
          const chRevsResponse = {};
          for (let charRevsIdsArray of dataFive) {
            const { characteristic_reviews, _id } = charRevsIdsArray;
            const proms = characteristic_reviews.map((id) => CharacteristicReview.findOne({ id }));
            const chRevsResults = await Promise.all(proms)
              .then((dataSix) => chRevsResponse[`${_id}`] = dataSix)
              .catch((errSix) => `productDataQuery ERROR: look up characteristics by their ids: ${errSix}` );
          }
          return chRevsResponse;
        })
        .catch((errFive) => `productDataQuery ERROR: look up characteristic reviews by reviewsIds: ${errFive}`);
      responseData.reviewsResults = reviewsResults;
      responseData.prodCharacteristicsResults = prodCharacteristicsResults;
      responseData.charRevsResults = charRevsResults;
      return responseData;
    })
    .catch((errOne) => `productDataQuery ERROR look up reviewIds by product: ${errOne}`);
  return result;
};

module.exports = {
  db,
  reviewsQuery,
  productDataQuery,
  ProductToReviews,
  ReviewToPhotos,
  ProductToCharacteristics,
  ReviewToCharacteristicReviews,
  CharacteristicToCharacteristicReviews,
};
