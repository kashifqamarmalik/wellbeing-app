/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import AvaiableVouchersList from './VouchersList';
import {getAllVouchers} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';

const AvaiableVouchers = (props) => {
  const {vouchers, setVouchers} = React.useContext(RequestContext);
  React.useEffect(() => {
    const getVoucherList = async () => {
      try {
        let data = await getAllVouchers();
        console.log('data in AvaiableVouchers.js', data);
        setVouchers(data.reverse());
      } catch (e) {
        console.log(e.message);
      }
    };
    getVoucherList();
  }, [setVouchers]);

  return (
    <Container>
      <AvaiableVouchersList itemList={vouchers} />
    </Container>
  );
};
export default AvaiableVouchers;
