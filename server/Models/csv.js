const fs = require('fs');
const readline = require('readline');

const readInterface = (filepath) => {
  const rlInterface = readline.createInterface({
    input: fs.createReadStream(filepath)
  });
  return rlInterface;
};

const lineToDB = (readInterface, query, collection) => {
  readInterface.on('line', (line) => {
    const split = line.split(',');
    query(split, collection);
  });
};

module.exports = {
  readInterface: readInterface,
  lineToDB: lineToDB
}
