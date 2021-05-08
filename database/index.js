const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdc_deploy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));

console.log('successful database connection');
db.once('open', function() {
});

const reviewsSchema = new mongoose.Schema({
  id: String,
  product_id: String,
  rating: String,
  date: String,
  summary: String,
  body: String,
  recommend: String,
  reported: String,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: String
});
// reviewsSchema.index({ id: 1 });
// reviewsSchema.index({ product_id: 1 });
const Review = mongoose.model('Review', reviewsSchema, 'reviews');

const reviewsPhotosSchema = new mongoose.Schema({
  id: String,
  review_id: String,
  url: String
});
// reviewsPhotosSchema.index({ id: 1 });
// reviewsPhotosSchema.index({ review_id: 1 });
const ReviewPhoto = mongoose.model('ReviewPhoto', reviewsPhotosSchema, 'reviews_photos');

const characteristicsSchema = new mongoose.Schema({
  id: String,
  product_id: String,
  name: String
});
// characteristicsSchema.index({ id: 1 })
// characteristicsSchema.index({ product_id: 1 });
const Characteristic = mongoose.model('Characteristic', characteristicsSchema, 'characteristics');

const characteristicReviewsSchema = new mongoose.Schema({
  id: String,
  review_id: String,
  characteristic_id: String,
  value: String
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
  _id: String,
  reviews: [String]
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
  _id: String,
  photos: [String]
});
const ReviewToPhotos = mongoose.model('ReviewToPhotos', reviewsToPhotosSchema, 'reviews_to_photos');
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
  _id: String,
  characteristics: [String]
});
const ProductToCharacteristics = mongoose.model('ProductToCharacteristics', productsToCharacteristicsSchema, 'products_to_characteristics');
ProductToCharacteristics.find({})
  .limit(3)
  .exec((err, res) => {
    if (err) { return console.error('ERROR! ProductToCharacteristics 3 docs check ERROR: ', err); }
    console.log('ProductToCharacteristics 3 docs check success: ', res);
  });






module.exports = {
  db: db
}

// OLD PLAN //

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
//      id: Number,
//      url: String
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
