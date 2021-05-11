const { reviewsQuery, productDataQuery } = require('./index.js');

function reviewsQueryTest(productId) {
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
}
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
productDataQueryTest(4);
