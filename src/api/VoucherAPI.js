/* eslint-disable prettier/prettier */
//import axios from 'axios';
let config = require('../config.js');

//const baseURL = 'http://localhost:8066/api';
const baseURL = `http://${config.testing.ip}:${config.testing.port}/api`;

const getAllVouchers = () => {
  try {
    // const requests = await fetch(baseURL + '/voucher');
    // const json = await requests.json();
    const json = [
      {
        description: 'Voucher 1',
        date: '19-01-2021',
        _id: 0,
      },
      {
        description: 'Voucher 2',
        date: '19-01-2021',
        _id: 1,
      },
      {
        description: 'Voucher 3',
        date: '19-01-2021',
        _id: 2,
      },
      {
        description: 'Voucher 4',
        date: '21-01-2021',
        _id: 3,
      },
      {
        description: 'Your Voucher',
        date: '19-01-2021',
        _id: 4,
      },
    ];
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

// const postVoucher = async (newRequest) => {
//   var formBody = [];
//   for (var key in newRequest) {
//     var encodedKey = encodeURIComponent(key);
//     var encodedValue = encodeURIComponent(newRequest[key]);
//     formBody.push(encodedKey + '=' + encodedValue);
//   }
//   formBody = formBody.join('&');
//   try {
//     const res = await fetch(baseURL + '/requests', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//       body: formBody,
//     });
//     if (res.ok) {
//       return await res.json();
//     } else {
//       return res;
//     }
//   } catch (e) {
//     throw new Error(e);
//   }
// };

const getSpecificVoucher = async (id) => {
  try {
    // const requests = await fetch(baseURL + '/voucher/' + id);
    // const json = await requests.json();
    const json = [
      {
        description: 'Your Voucher',
        date: '19-01-2021',
        _id: 4,
      },
    ];
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

export {
  getAllVouchers,
  getSpecificVoucher,
  //   postVoucher,
};
