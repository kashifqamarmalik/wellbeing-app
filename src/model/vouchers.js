const availVouchersArray = [
  {
    description: 'Voucher 1',
    date: '19-01-2021',
    id: 0,
  },
  {
    description: 'Voucher 2',
    date: '19-01-2021',
    id: 1,
  },
  {
    description: 'Voucher 3',
    date: '19-01-2021',
    id: 2,
  },
  {
    description: 'Voucher 4',
    date: '21-01-2021',
    id: 3,
  },
  {
    description: 'Your Voucher',
    date: '19-01-2021',
    id: 4,
  },
];

const userVouchersArray = [
  {
    description: 'Your Voucher',
    date: '19-01-2021',
    id: 4,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  availVouchersArray,
  userVouchersArray,
};
