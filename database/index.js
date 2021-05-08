const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdc_new', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));

db.once('open', function() {
  console.log('successful database connection');
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

const Review = mongoose.model('Reviews', reviewsSchema);

const insertLine = (lineToInsert, collection) => {
  if (collection === 'reviews') {
    const reviewParse = {
      id: lineToInsert[0],
      product_id: lineToInsert[1],
      rating: lineToInsert[2],
      date: lineToInsert[3],
      summary: lineToInsert[4],
      body: lineToInsert[5],
      recommend: lineToInsert[6],
      reported: lineToInsert[7],
      reviewer_name: lineToInsert[8],
      reviewer_email: lineToInsert[9],
      response: lineToInsert[10],
      helpfulness: lineToInsert[11]
    }
    const review = new Review(reviewParse);
    review.save((err) => {
      if (err) { console.error( err ); }
    });
  }
};

module.exports = {
  db: db,
  insertLine: insertLine
}

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
