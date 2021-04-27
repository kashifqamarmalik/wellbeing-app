/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import AvaiableVouchersList from './VouchersList';
import {getAllVouchers, getSpecificVoucher} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';
import {comparer} from '../utils/Utility';

const AvaiableVouchers = (props) => {
  const {vouchers, setVouchers} = React.useContext(RequestContext);
  const {userVouchers, setUserVouchers} = React.useContext(RequestContext);

  React.useEffect(() => {
    const getVoucherList = async () => {
      try {
        // Get all vouchers
        let data = await getAllVouchers();

        // // Get user vouchers
        let userId = 'testing_ID';
        let subtractData = await getSpecificVoucher(userId);
        setUserVouchers(subtractData.reverse());

        // subtract 'user vouchers' from 'all vouchers'
        let finale = data.filter(comparer(subtractData));

        setVouchers(finale.reverse());
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
