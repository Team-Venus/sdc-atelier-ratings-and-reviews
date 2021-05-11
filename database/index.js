// INITIALIZE/CONNECTION

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdc_deploy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('successful database connection'));

// MODELS (CURRENTLY WITH INDEXING AND AGGREGATION INITIALIZATION)
// AT THIS TIME: UNCOMMENT INDEXING AND AGGREGATIONS ON DATABASE INITIALIZATION!

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
// reviewsSchema.index({ id: 1 });
// reviewsSchema.index({ product_id: 1 });
const Review = mongoose.model('Review', reviewsSchema, 'reviews');

const reviewsPhotosSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
});
// reviewsPhotosSchema.index({ id: 1 });
// reviewsPhotosSchema.index({ review_id: 1 });
const ReviewPhoto = mongoose.model('reviews_photos', reviewsPhotosSchema, 'reviews_photos');

const characteristicsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
});
// characteristicsSchema.index({ id: 1 })
// characteristicsSchema.index({ product_id: 1 });
const Characteristic = mongoose.model('Characteristic', characteristicsSchema, 'characteristics');

const characteristicReviewsSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  characteristic_id: Number,
  value: Number,
});
// characteristicReviewsSchema.index({ id: 1 });
// characteristicReviewsSchema.index({ review_id: 1 });
// characteristicReviewsSchema.index({ characteristic_id: 1 });
const CharacteristicReview = mongoose.model('CharacteristicReview', characteristicReviewsSchema, 'characteristic_reviews');

// Review.aggregate([
//   { $group: { _id: '$product_id', reviews: { $push: '$id' } } },
//   { $out: { db: 'sdc_deploy', coll: 'products_to_reviews' } }
//   ])
//   .option({ allowDiskUse: true, maxTimeMS: 900000 })
//   .then((res) => {
//     console.log('"product_to_reviews" collection build success: ', res);
//   })
//   .catch((err) => {
//     console.error('ERROR! "product_to_reviews" collection build ERROR: ', err);
//   });
const productsToReviewsSchema = new mongoose.Schema({
  _id: Number,
  reviews: [Number],
});
const ProductToReviews = mongoose.model('ProductToReviews', productsToReviewsSchema, 'products_to_reviews');
// ProductToReviews.find({})
//   .limit(3)
//   .exec((err, res) => {
//     if (err) { return console.error('ERROR! ProductToReviews 3 docs check ERROR: ', err); }
//     console.log('ProductToReviews 3 docs check success: ', res);
//   });

// ReviewPhoto.aggregate([
//   { $group: {_id: '$review_id', photos: { $push: '$id' } } },
//   { $out: { db: 'sdc_deploy', coll: 'reviews_to_photos' } }
//   ])
//   .option({ allowDiskUse: true, maxTimeMS: 900000 })
//   .then((res) => {
//     console.log('"reviews_to_photos" collection build success: ', res);
//   })
//   .catch((err) => {
//     console.error('ERROR! "reviews_to_photos" collection build ERROR: ', err);
//   });
const reviewsToPhotosSchema = new mongoose.Schema({
  _id: Number,
  photos: [Number],
});
const ReviewToPhotos = mongoose.model('reviews_to_photos', reviewsToPhotosSchema, 'reviews_to_photos');
// ReviewToPhotos.find({})
//   .limit(3)
//   .exec((err, res) => {
//     if (err) { return console.error('ERROR! ReviewToPhotos 3 docs check ERROR: ', err); }
//     console.log('ReviewToPhotos 3 docs check success: ', res);
//   });

// Characteristic.aggregate([
//   { $group: {_id: '$product_id', characteristics: { $push: '$id' } } },
//   { $out: { db: 'sdc_deploy', coll: 'products_to_characteristics' } }
//   ])
//   .option({ allowDiskUse: true, maxTimeMS: 900000 })
//   .then((res) => {
//     console.log('"products_to_characteristics" collection build success: ', res);
//   })
//   .catch((err) => {
//     console.error('ERROR! "products_to_characteristics" collection build ERROR: ', err);
//   });
const productsToCharacteristicsSchema = new mongoose.Schema({
  _id: Number,
  characteristics: [Number],
});
const ProductToCharacteristics = mongoose.model('ProductToCharacteristics', productsToCharacteristicsSchema, 'products_to_characteristics');
// ProductToCharacteristics.find({})
//   .limit(3)
//   .exec((err, res) => {
//     if (err) {
//       return console.error('ERROR! ProductToCharacteristics 3 docs check ERROR: ', err);
//     }
//     return console.log('ProductToCharacteristics 3 docs check success: ', res);
//   });

// CharacteristicReview.aggregate([
//   { $group: {_id: '$review_id', characteristic_reviews: { $push: '$id' } } },
//   { $out: { db: 'sdc_deploy', coll: 'reviews_to_characteristic_reviews' } }
//   ])
//   .option({ allowDiskUse: true, maxTimeMS: 900000 })
//   .then((res) => {
//     console.log('"reviews_to_characteristic_reviews" collection build success: ', res);
//   })
//   .catch((err) => {
//     console.error('ERROR! "reviews_to_characteristic_reviews" collection build ERROR: ', err);
//   });
const reviewsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const ReviewToCharacteristicReviews = mongoose.model('ReviewToCharacteristicReviews', reviewsToCharacteristicReviewsSchema, 'reviews_to_characteristic_reviews');
// ReviewToCharacteristicReviews.find({})
//   .limit(3)
//   .exec((err, res) => {
//     if (err) {
//       return console.error('ERROR! ReviewToCharacteristicReviews 3 docs check ERROR: ', err);
//     }
//     console.log('ReviewToCharacteristicReviews 3 docs check success: ', res);
//   });

// Characteristic.aggregate([
//   {
//     $lookup: {
//       from: 'characteristic_reviews',
//       localField: 'id',
//       foreignField: 'characteristic_id',
//       as: 'characteristic_reviews',
//     },
//   },
//   {
//     $replaceRoot: {
//       newRoot: {
//         $mergeObjects: [{ $arrayElemAt: ['$characteristic_reviews', 0] }, '$$ROOT'],
//       },
//     },
//   },
//   { $group: { _id: '$review_id', characteristic_reviews: { $push: '$id' } } },
//   { $out: { db: 'sdc_deploy', coll: 'characteristics_to_characteristic_reviews' } },
// ])
//   .option({ allowDiskUse: true, maxTimeMS: 1800000 })
//   .then((res) => {
//     console.log('"characteristics_to_characteristic_reviews" collection build success: ', res);
//   })
//   .catch((err) => {
//     console.error('ERROR! "characteristics_to_characteristic_reviews" collection build: ', err);
//   });
const characteristicsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const CharacteristicToCharacteristicReviews = mongoose.model('CharacteristicToCharacteristicReviews', characteristicsToCharacteristicReviewsSchema, 'characteristics_to_characteristic_reviews');
// CharacteristicToCharacteristicReviews.deleteOne({ _id: null }, (err) => {
//   if (err) {
//     console.error(`The delete query for the _id "null" with giant array did not work: ${err}`);
//   }
// });
// CharacteristicToCharacteristicReviews.find({})
//   .limit(3)
//   .exec((err, res) => {
//     if (err) {
//       return console.error('ERROR! CharacteristicToCharacteristicReviews 3 docs check: ', err);
//     }
//     return console.log('CharacteristicToCharacteristicReviews 3 docs check success: ', res);
//   });

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
          // [
          //   { characteristic_reviews: [ 18, 19, 21, 20 ], _id: 9 },
          //   { characteristic_reviews: [ 22, 23, 24, 25 ], _id: 10 },
          //   { characteristic_reviews: [ 14, 15, 16, 17 ], _id: 8 }
          // ]
          // chRevsResponse[`${_id}`].dataSix
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
};

// OLD PLAN

// var productSchema = new mongoose.Schema({
//   product: String,
//   reviews: [{
//     review_id: Number,
//     rating: Number,
//     summary: String,
//     recommended: Boolean,
//     response: String,
//     body: String,
//     date: String,
//     reviewer_name: String,
//     helpfulness: Number,
//     photos: [{
//       id: Number,
//       url: String
//     }],
//   }],
//   reviews_meta: {
//     ratings: {
//       1: String,
//       2: String,
//       3: String,
//       4: String,
//       5: String
//     },
//     recommended: {
//       false: String,
//       true: String
//     },
//     characteristics: {
//       Fit: {
//         id: Number,
//         value: String,
//         count: Number
//       },
//       Length: {
//         id: Number,
//         value: String,
//         count: Number
//       },
//       Comfort: {
//         id: Number,
//         value: String,
//         count: Number
//       },
//       Quality: {
//         id: Number,
//         value: String,
//         count: Number
//       },
//       Width: {
//         id: Number,
//         value: String,
//         count: Number
//       },
//       Size: {
//         id: Number,
//         value: String,
//         count: Number
//       }
//     }
//   }
// });

// var Product = mongoose.model('Product', productSchema);

// // Simple Tests //
// // Create
// var test = new Product({
//   product: '1'
// });
// // Save w/ error
// test.save(err => {
//   if (err) { return console.error(err) }
// });
// // List of all Product documents w/ error
// Product.find((err, products) => {
//   if (err) { return console.error(err) }
//   console.log(products);
// });
// // End of Simple Tests //
