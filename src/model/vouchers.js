const availVouchersArray = [
  {
    description: 'Voucher 1',
    date: '19-01-2021',
    id: '1',
  },
  {
    description: 'Asim Voucher',
    date: '19-01-2021',
    id: '2',
  },
  {
    description: 'Kashif Voucher',
    date: '19-01-2021',
    id: '3',
  },
  {
    description: 'Nhan Voucher',
    date: '19-01-2021',
    id: '4',
  },
  {
    description: 'Ngoc Voucher',
    date: '19-01-2021',
    id: '5',
  },
  {
    description: 'Jani Voucher',
    date: '19-01-2021',
    id: '6',
  },
];

const userVouchersArray = [
  {
    description: 'Asim Voucher',
    date: '19-01-2021',
    id: 'b9142010-9be7-4cd2-b1be-0a0c02daba67',
    itemID: '2',
    senderID: '608041de2abcce6f6cc2f72b',
    slug: 'asim-voucher',
  },
  {
    description: 'Kashif Voucher',
    date: '19-01-2021',
    id: 'b9142010-9be7-4cd2-b1be-0a0c02daba68',
    itemID: '3',
    senderID: '608041fe2abcce6f6cc2f72c',
    slug: 'kashif-voucher',
  },
  {
    description: 'Nhan Voucher',
    date: '19-01-2021',
    id: 'b9142010-9be7-4cd2-b1be-0a0c02daba69',
    itemID: '4',
    senderID: '608042262abcce6f6cc2f72d',
    slug: 'nhan-voucher',
  },
  {
    description: 'Misty Voucher',
    date: '19-01-2021',
    id: 'b9142010-9be7-4cd2-b1be-0a0c02daba70',
    itemID: '5',
    senderID: '608041952abcce6f6cc2f72a',
    slug: 'misty-voucher',
  },
  {
    description: 'Jani Voucher',
    date: '19-01-2021',
    id: 'b9142010-9be7-4cd2-b1be-0a0c02daba71',
    itemID: '6',
    senderID: '6080423e2abcce6f6cc2f72e',
    slug: 'jani-voucher',
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  availVouchersArray,
  userVouchersArray,
};
