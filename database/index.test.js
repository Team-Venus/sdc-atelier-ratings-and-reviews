const {
  reviewsQuery,
  productDataQuery,
  ProductToReviews,
  ReviewToPhotos,
  ProductToCharacteristics,
  ReviewToCharacteristicReviews,
  CharacteristicToCharacteristicReviews,
} = require('./index.js');

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
relationshipTablesTest();

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
reviewsQueryTest(4);

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
productDataQueryTest(4);
