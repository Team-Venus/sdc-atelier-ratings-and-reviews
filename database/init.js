// INITIALIZE/CONNECTION

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sdc_deploy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('successful database connection'));

// MODELS, INDEXING, AGGREGATIONS FOR RELATIONAL DATA

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
reviewsSchema.index({ id: 1 });
reviewsSchema.index({ product_id: 1 });
const Review = mongoose.model('Review', reviewsSchema, 'reviews');

const reviewsPhotosSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
});
reviewsPhotosSchema.index({ id: 1 });
reviewsPhotosSchema.index({ review_id: 1 });
const ReviewPhoto = mongoose.model('reviews_photos', reviewsPhotosSchema, 'reviews_photos');

const characteristicsSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
});
characteristicsSchema.index({ id: 1 });
characteristicsSchema.index({ product_id: 1 });
const Characteristic = mongoose.model('Characteristic', characteristicsSchema, 'characteristics');

const characteristicReviewsSchema = new mongoose.Schema({
  id: Number,
  review_id: Number,
  characteristic_id: Number,
  value: Number,
});
characteristicReviewsSchema.index({ id: 1 });
characteristicReviewsSchema.index({ review_id: 1 });
characteristicReviewsSchema.index({ characteristic_id: 1 });
const CharacteristicReview = mongoose.model('CharacteristicReview', characteristicReviewsSchema, 'characteristic_reviews');

Review.aggregate([
  { $group: { _id: '$product_id', reviews: { $push: '$id' } } },
  { $out: { db: 'sdc_deploy', coll: 'products_to_reviews' } },
])
  .option({ allowDiskUse: true, maxTimeMS: 900000 })
  .then((res) => {
    console.log('"product_to_reviews" collection build success: ', res);
  })
  .catch((err) => {
    console.error('ERROR! "product_to_reviews" collection build ERROR: ', err);
  });
const productsToReviewsSchema = new mongoose.Schema({
  _id: Number,
  reviews: [Number],
});
const ProductToReviews = mongoose.model('ProductToReviews', productsToReviewsSchema, 'products_to_reviews');

ReviewPhoto.aggregate([
  { $group: { _id: '$review_id', photos: { $push: '$id' } } },
  { $out: { db: 'sdc_deploy', coll: 'reviews_to_photos' } },
])
  .option({ allowDiskUse: true, maxTimeMS: 900000 })
  .then((res) => {
    console.log('"reviews_to_photos" collection build success: ', res);
  })
  .catch((err) => {
    console.error('ERROR! "reviews_to_photos" collection build ERROR: ', err);
  });
const reviewsToPhotosSchema = new mongoose.Schema({
  _id: Number,
  photos: [Number],
});
const ReviewToPhotos = mongoose.model('reviews_to_photos', reviewsToPhotosSchema, 'reviews_to_photos');

Characteristic.aggregate([
  { $group: { _id: '$product_id', characteristics: { $push: '$id' } } },
  { $out: { db: 'sdc_deploy', coll: 'products_to_characteristics' } }
])
  .option({ allowDiskUse: true, maxTimeMS: 900000 })
  .then((res) => {
    console.log('"products_to_characteristics" collection build success: ', res);
  })
  .catch((err) => {
    console.error('ERROR! "products_to_characteristics" collection build ERROR: ', err);
  });
const productsToCharacteristicsSchema = new mongoose.Schema({
  _id: Number,
  characteristics: [Number],
});
const ProductToCharacteristics = mongoose.model('ProductToCharacteristics', productsToCharacteristicsSchema, 'products_to_characteristics');

CharacteristicReview.aggregate([
  { $group: { _id: '$review_id', characteristic_reviews: { $push: '$id' } } },
  { $out: { db: 'sdc_deploy', coll: 'reviews_to_characteristic_reviews' } },
])
  .option({ allowDiskUse: true, maxTimeMS: 900000 })
  .then((res) => {
    console.log('"reviews_to_characteristic_reviews" collection build success: ', res);
  })
  .catch((err) => {
    console.error('ERROR! "reviews_to_characteristic_reviews" collection build ERROR: ', err);
  });
const reviewsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const ReviewToCharacteristicReviews = mongoose.model('ReviewToCharacteristicReviews', reviewsToCharacteristicReviewsSchema, 'reviews_to_characteristic_reviews');

Characteristic.aggregate([
  {
    $lookup: {
      from: 'characteristic_reviews',
      localField: 'id',
      foreignField: 'characteristic_id',
      as: 'characteristic_reviews',
    },
  },
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [{ $arrayElemAt: ['$characteristic_reviews', 0] }, '$$ROOT'],
      },
    },
  },
  { $group: { _id: '$review_id', characteristic_reviews: { $push: '$id' } } },
  { $out: { db: 'sdc_deploy', coll: 'characteristics_to_characteristic_reviews' } },
])
  .option({ allowDiskUse: true, maxTimeMS: 1800000 })
  .then((res) => {
    console.log('"characteristics_to_characteristic_reviews" collection build success: ', res);
    console.log('Deleting weird null id values: ');
    CharacteristicToCharacteristicReviews.deleteOne({ _id: null }, (err) => {
      if (err) {
        console.error(`The delete query for the _id "null" with giant array did not work: ${err}`);
      }
    });
  })
  .catch((err) => {
    console.error('ERROR! "characteristics_to_characteristic_reviews" collection build: ', err);
  });
const characteristicsToCharacteristicReviewsSchema = new mongoose.Schema({
  _id: Number,
  characteristic_reviews: [Number],
});
const CharacteristicToCharacteristicReviews = mongoose.model('CharacteristicToCharacteristicReviews', characteristicsToCharacteristicReviewsSchema, 'characteristics_to_characteristic_reviews');
