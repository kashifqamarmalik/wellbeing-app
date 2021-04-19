/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import YourVouchersList from './VouchersList';
import {getSpecificVoucher} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';

const YourVouchers = (props) => {
  const {userVouchers, setUserVouchers} = React.useContext(RequestContext);
  React.useEffect(() => {
    const getUserVoucher = async () => {
      try {
        let userId = 'testing_ID';
        let data = await getSpecificVoucher(userId);
        console.log('data', data);
        setUserVouchers(data.reverse());
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserVoucher();
  }, [setUserVouchers]);

  return (
    <Container>
      <YourVouchersList itemList={userVouchers} flag={"YourVouchers"}/>
    </Container>
  );
};
export default YourVouchers;
