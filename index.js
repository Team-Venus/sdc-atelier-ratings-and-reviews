const path = require('path');

const dbIndexPath = path.join(__dirname, '/database/index.js');
const serverIndexPath = path.join(__dirname, '/server/index.js');

module.exports = {
  dbIndexPath: dbIndexPath,
  serverIndexPath: serverIndexPath
}
