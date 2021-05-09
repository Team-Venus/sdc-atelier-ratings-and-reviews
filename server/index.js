const path = require('path');

const mainIndex = require('../index.js');
const { dbIndexPath } = mainIndex;
const { db, reviewsQuery } = require(dbIndexPath);

