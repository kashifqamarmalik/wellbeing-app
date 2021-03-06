/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
import Voucher from './Voucher';

const VouchersList = (props) => {
  return (
    <View>
      <FlatList
        data={props.itemList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Voucher
            description={item.description}
            time={item.date}
            requestId={item.id}
            updateAvailableVouchers={props.updateAvailableVouchers}
            flag={props.flag ? props.flag : null}
          />
        )}
      />
    </View>
  );
};

export default VouchersList;
