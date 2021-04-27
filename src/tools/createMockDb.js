/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const {availVouchersArray, userVouchersArray} = require('../model/vouchers');
const data = JSON.stringify({availVouchersArray, userVouchersArray});
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
