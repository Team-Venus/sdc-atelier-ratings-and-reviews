var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project_catwalk_sdc');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'database connection error:'));

db.once('open', function() {
  console.log('successful database connection');
});

var productSchema = new mongoose.Schema({
  product: String,
  reviews: [{
    review_id: Number,
    rating: Number,
    summary: String,
    recommended: Boolean,
    response: String,
    body: String,
    date: String,
    reviewer_name: String,
    helpfulness: Number,
    photos: [{
     id: Number,
     url: String
    }],
  }],
  reviews_meta: {
    ratings: {
      1: String,
      2: String,
      3: String,
      4: String,
      5: String
    },
    recommended: {
      false: String,
      true: String
    },
    characteristics: {
      Fit: {
        id: Number,
        value: String
      },
      Length: {
        id: Number,
        value: String
      },
      Comfort: {
        id: Number,
        value: String
      },
      Quality: {
        id: Number,
        value: String
      },
      Width: {
        id: Number,
        value: String
      },
      Size: {
        id: Number,
        value: String
      }
    }
  }
});

var Product = mongoose.model('Product', productSchema);

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

module.exports = {
  db: db
}

