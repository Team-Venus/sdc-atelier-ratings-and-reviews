const { utilRestructureReviews, utilMetaDataParser } = require('./index.js');
const { reviewsQuery, productDataQuery } = require('../database/index.js');
const { reviewList } = require('./prevAPISampleData.js');

const utilRestructureReviewsTest = async () => {
  const result = await utilRestructureReviews(reviewsQuery(4));
  const resultMainKeys = Object.keys(result);
  const resultResultsKeys = Object.keys(result.results);
  const similarExpect = reviewList;
  const similarExpectMainKeys = Object.keys(similarExpect);
  const similarExpectResultKeys = Object.keys(similarExpect.results);
  let sameLengths = true;
  if (resultMainKeys.length !== similarExpectMainKeys.length) {
    sameLengths = false;
  }
  let sameResultsLengths = true;
  if (resultResultsKeys.length !== similarExpectResultKeys.length) {
    sameResultsLengths = false;
  }
  let sameMainKeys = true;
  resultMainKeys.forEach((key) => {
    if (!similarExpectMainKeys.includes(key)) {
      sameMainKeys = false;
    }
  });
  let sameResultsKeys = true;
  resultResultsKeys.forEach((key) => {
    if (!similarExpectResultKeys.includes(key)) {
      sameResultsKeys = false;
    }
  });
  console.log(result);
  console.log('utilRestructureReviewsTest same length pass? ', sameLengths);
  console.log('utilRestructureReviewsTest same main keys pass? ', sameMainKeys);
  console.log('utilRestructureReviewsTest same results length pass? ', sameResultsLengths);
  console.log('utilRestructureReviewsTest same results keys pass? ', sameResultsKeys);
  console.log('utilRestructureReviewsTest overall result pass? ', sameLengths && sameMainKeys);
};
utilRestructureReviewsTest();

const utilMetaDataParserTest = async () => {
  const result = await utilMetaDataParser(productDataQuery(4));
  console.log(result);
};
utilMetaDataParserTest();
