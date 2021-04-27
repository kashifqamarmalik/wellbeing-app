/* eslint-disable prettier/prettier */
//import axios from 'axios';
let config = require('../config.js');

//const baseURL = 'http://localhost:8066/api';
//const baseURL = `http://${config.testing.ip}:${config.testing.port}/api`;
const baseURL = `http://${config.testing.ip}:${config.mockAPI.port}`;

const getAllVouchers = async () => {
  try {
    const requests = await fetch(baseURL + '/availVouchersArray');
    const json = await requests.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

const postVoucher = async (item) => {
  try {
    console.log('in post voucher API: ', item);
    const res = await fetch(baseURL + '/userVouchersArray/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(item),
    });
    if (res.ok) {
      return await res.json();
    } else {
      return res;
    }
  } catch (e) {
    throw new Error(e);
  }
};

const getSpecificVoucher = async (id) => {
  try {
    const requests = await fetch(
      baseURL + '/userVouchersArray' + `/?senderID=${id}`,
    );
    const json = await requests.json();

    return json;
  } catch (e) {
    throw new Error(e);
  }
};

export {getAllVouchers, getSpecificVoucher, postVoucher};
