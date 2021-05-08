const path = require('path');

const dbIndexPath = path.join(__dirname, '/database/index.js');
const serverIndexPath = path.join(__dirname, '/server/index.js');

const csvDataPath = path.join(__dirname, '/csv_data');
const characteristicReviewsCsv = path.join(csvDataPath, '/characteristic_reviews.csv');
const characteristicsCsv = path.join(csvDataPath, '/characteristics.csv');
const reviewsPhotosCsv = path.join(csvDataPath, '/reviews_photos.csv');
const reviewsCsv = path.join(csvDataPath, '/reviews.csv');



module.exports = {
  dbIndexPath: dbIndexPath,
  serverIndexPath: serverIndexPath,
  characteristicReviewsCsv: characteristicReviewsCsv,
  characteristicsCsv: characteristicsCsv,
  reviewsPhotosCsv: reviewsPhotosCsv,
  reviewsCsv: reviewsCsv
}
