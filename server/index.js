const express = require('express');
const bodyParser = require('body-parser');
const { reviewsQuery, productDataQuery } = require('../database/index.js');

const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// controllers

const utilRestructureReviews = async (reviewsQueryData) => {
  const { reviewsResponse, reviewsPhotosResponse } = await reviewsQueryData;
  const parse = {};
  parse.product = `${reviewsResponse[0].product_id}`;
  parse.page = 0; // temporary
  parse.count = 5; // temporary
  const photosParse = (id) => {
    if (reviewsPhotosResponse[id]) {
      return reviewsPhotosResponse[id].slice();
    }
    return null;
  };
  const recommendFix = (recommend) => {
    if (Number(recommend)) {
      return true;
    }
    return false;
  };
  const responseFix = (response) => {
    if (response === 'null' || response === '') {
      return null;
    }
    return response;
  };
  parse.results = reviewsResponse.map((review) => {
    const photosObject = photosParse(review.id);
    const recommendFixResult = recommendFix(review.recommend);
    const responseFixResult = responseFix(review.response);
    const reviewFix = {
      review_id: review.id,
      rating: review.rating,
      summary: review.summary,
      recommend: recommendFixResult,
      response: responseFixResult,
      body: review.body,
      date: review.date,
      reviewer_name: review.reviewer_name,
      helpfulness: review.helpfulness,
      photos: photosObject || [],
    };
    return reviewFix;
  });
  return parse;
};

const utilMetaDataParser = async (productDataQueryData) => {
  const {
    reviewsResults,
    prodCharacteristicsResults,
    charRevsResults,
  } = await productDataQueryData;
  const parse = {};
  parse.product_id = `${reviewsResults[0].product_id}`;
  parse.ratings = {};
  parse.recommended = {};
  parse.characteristics = {};
  reviewsResults.forEach((review) => {
    const { ratings, recommended } = parse;
    if (!ratings[review.rating]) {
      ratings[review.rating] = 1;
      ratings[review.rating] = ratings[review.rating].toString();
    }
    if (ratings[review.rating]) {
      ratings[review.rating] = Number(ratings[review.rating]);
      ratings[review.rating] += 1;
      ratings[review.rating] = ratings[review.rating].toString();
    }
    if (!recommended[review.recommend]) {
      recommended[review.recommend] = 1;
      recommended[review.recommend] = recommended[review.recommend].toString();
    }
    if (recommended[review.recommend]) {
      recommended[review.recommend] = Number(recommended[review.recommend]);
      recommended[review.recommend] += 1;
      recommended[review.recommend] = recommended[review.recommend].toString();
    }
  });
  prodCharacteristicsResults.forEach((characteristic) => {
    const { characteristics } = parse;
    const { id, name } = characteristic;
    if (!characteristics[name]) {
      characteristics[name] = {
        id,
        value: '0',
      };
    }
  });
  const averageTracker = {};
  for (let key in charRevsResults) {
    const currentReview = charRevsResults[key];
    currentReview.forEach((charRev) => {
      for (let charKey in parse.characteristics) {
        if (!averageTracker[charKey]) {
          averageTracker[charKey] = {
            total: 0,
            count: 0,
          };
        }
        if (parse.characteristics[charKey].id === charRev.characteristic_id) {
          parse.characteristics[charKey].value = Number(parse.characteristics[charKey].value);
          averageTracker[charKey].total += charRev.value;
          averageTracker[charKey].count += 1;
          let average = averageTracker[charKey].total / averageTracker[charKey].count;
          parse.characteristics[charKey].value = average;
          parse.characteristics[charKey].value = parse.characteristics[charKey].value.toString();
        }
      }
    });
  }
  return parse;
};

const utilPostToDBParse = (post) => {
  const {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = post;
  const toReviewsCollection = {
    id: null, // unknown at this point
    product_id,
    rating,
    date: new Date(),
    summary,
    body,
    recommend,
    reported: false,
    reviewer_name: name,
    reviewer_email: email,
    response: null,
    helpfulness: 0,
  };
  const toPhotosCollectionArray = [];
  for (let url of photos) {
    const photoObj = {
      id: null, // unknown at this point
      review_id: null, // unknown at this point
      url,
    }
    toPhotosCollectionArray.push(photoObj);
  }
  const toCharCollectionArray = []; // unknown how to handle this yet
  const toCharRevsArray = []; // unknown how to handle this yet
  for (let currentId in characteristics) {
    const currentValue = characteristics[currentId];
    const charObj = {
      id: currentId,
      product_id,
      name: null,
    }
    const charRevObj = {
      id: null,
      review_id: null,
      characteristic_id: currentId,
      value: currentValue,
    }
    toCharCollectionArray.push(charObj);
    toCharRevsArray.push(charRevObj);
  }
  const toDatabasePostQuery = {
    toReviewsCollection,
    toPhotosCollectionArray,
    toCharCollectionArray,
    toCharRevsArray,
  };
  return toDatabasePostQuery;
};

// end points

app.get('/reviews', async (req, res) => {
  const { product_id } = req.query;
  // req.query also has sort, count, and page properties
  // console.log(`incoming reviews request for product_id: ${product_id}`);
  const reviewsQueryResult = await reviewsQuery(product_id);
  const reviewsRestructure = await utilRestructureReviews(reviewsQueryResult);
  res.send(reviewsRestructure);
  res.end();
});

app.get('/reviews/meta/', async (req, res) => {
  const { product_id } = req.query;
  // console.log(`incoming metadata request for product_id: ${product_id}`);
  const productDataQueryResult = await productDataQuery(product_id);
  const metaDataBuild = await utilMetaDataParser(productDataQueryResult);
  res.send(metaDataBuild);
  res.end();
});

app.post('/reviews', async (req, res) => {
  const { product_id } = req.body;
  console.log(`incoming post review request for product_id: ${product_id}`);
  const parse = utilPostToDBParse(req.body);
  // console.log('This is definitely getting back to post handler:', parse);

  res.end();
});

app.listen(port, () => {
  console.log(`Ratings and reviews service app listening at http://localhost:${port}`);
});

module.exports = {
  utilRestructureReviews,
  utilMetaDataParser,
  utilPostToDBParse,
};
