const {
  reviewsQuery,
  productDataQuery,
  postReviewToDB,
  ProductToReviews,
  ReviewToPhotos,
  ProductToCharacteristics,
  ReviewToCharacteristicReviews,
  CharacteristicToCharacteristicReviews,
} = require('./index.js');
const { utilPostToDBParse } = require('../server/index.js');

const relationshipTablesTest = () => {
  ProductToReviews.find({})
    .limit(3)
    .exec((err, res) => {
      if (err) { return console.error('ERROR! ProductToReviews 3 docs check ERROR: ', err); }
      return console.log('ProductToReviews 3 docs check success: ', res);
    });
  ReviewToPhotos.find({})
    .limit(3)
    .exec((err, res) => {
      if (err) { return console.error('ERROR! ReviewToPhotos 3 docs check ERROR: ', err); }
      return console.log('ReviewToPhotos 3 docs check success: ', res);
    });
  ProductToCharacteristics.find({})
    .limit(3)
    .exec((err, res) => {
      if (err) {
        return console.error('ERROR! ProductToCharacteristics 3 docs check ERROR: ', err);
      }
      return console.log('ProductToCharacteristics 3 docs check success: ', res);
    });
  ReviewToCharacteristicReviews.find({})
    .limit(3)
    .exec((err, res) => {
      if (err) {
        return console.error('ERROR! ReviewToCharacteristicReviews 3 docs check ERROR: ', err);
      }
      return console.log('ReviewToCharacteristicReviews 3 docs check success: ', res);
    });
  CharacteristicToCharacteristicReviews.find({})
    .limit(3)
    .exec((err, res) => {
      if (err) {
        return console.error('ERROR! CharacteristicToCharacteristicReviews 3 docs check: ', err);
      }
      return console.log('CharacteristicToCharacteristicReviews 3 docs check success: ', res);
    });
};
// relationshipTablesTest();

const reviewsQueryTest = (productId) => {
  const timeStart = new Date();
  reviewsQuery(productId)
    .then((result) => {
      console.log('///////////////////////// reviewsQueryTest /////////////////////////');
      const timeElapsed = new Date() - timeStart;
      console.log('Time to query: ', timeElapsed);
      console.log('reviewsQuery reponse:', result);
      console.log('reviewsResponse Length: ', result.reviewsResponse.length);
      console.log('photosResponse Length: ', Object.keys(result.reviewsPhotosResponse).length);
      console.log('photosResponse Object: ', result.reviewsPhotosResponse);
    })
    .catch((error) => console.error(error));
};
// reviewsQueryTest(4);

const productDataQueryTest = (productId) => {
  const timeStart = new Date();
  productDataQuery(productId)
    .then((response) => {
      console.log('///////////////////////// productDataQueryTest /////////////////////////');
      const timeElapsed = new Date() - timeStart;
      console.log('Time to query: ', timeElapsed);
      console.log('productDataQuery response: ', response);
    })
    .catch((error) => console.error(error));
};
// productDataQueryTest(4);

const postRequiredInfoTest = () => {
  const testSemiParsedData = {
    toReviewsCollection: {
      id: null,
      product_id: 17069,
      rating: 0,
      date: '2021-05-12T06:01:56.291Z',
      summary: 'alsfudcna,sufhsnalf,sudcbd,cjhWaDHnlieufewhwrNLF,IUSJGBFCKA,',
      body: 'dgergeth',
      recommend: false,
      reported: false,
      reviewer_name: 'fkagurfuyg',
      reviewer_email: 'ian@flg.com',
      response: null,
      helpfulness: 0,
    },
    toPhotosCollectionArray: [
      {
        id: null,
        review_id: null,
        url: 'blob:http://localhost:3000/8e4f6cad-c28c-4e9e-961a-db59ea12af44',
      },
    ],
    toCharCollectionArray: [{ id: '57226', product_id: 17069, name: null }],
    toCharRevsArray: [{ id: null, characteristic_id: '57226', value: 4 }],
  };
  const timeStart = new Date();
  postReviewToDB(testSemiParsedData)
    .then((data) => {
      const timeElapsed = new Date() - timeStart;
      console.log('Time for query: ', timeElapsed);
      console.log('postRequiredInfo data: ', data);
    })
    .catch((error) => console.error('postRequiredInfo error: ', error));
};
postRequiredInfoTest();
