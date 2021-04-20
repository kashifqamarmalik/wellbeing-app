/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import YourVouchersList from './VouchersList';
import {getSpecificVoucher} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';

const YourVouchers = () => {
  const {userVouchers} = React.useContext(RequestContext);

  return (
    <Container>
      <YourVouchersList itemList={userVouchers} flag={'YourVouchers'} />
    </Container>
  );
};
export default YourVouchers;
