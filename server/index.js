const path = require('path');

const mainIndex = require('../index.js');
const {
  dbIndexPath,
  serverIndexPath,
  characteristicReviewsCsv,
  characteristicsCsv,
  reviewsPhotosCsv,
  reviewsCsv
} = mainIndex;
const csv = require('./Models/csv.js');
const { readInterface, lineToDB } = csv;
const { db, insertLine, Review } = require(dbIndexPath);

const reviewsRead = readInterface(reviewsCsv);
lineToDB(reviewsRead, insertLine, 'reviews');
