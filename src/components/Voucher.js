/* eslint-disable prettier/prettier */
import React from 'react';
import {ListItem as BaseListItem, Left, Right, Text} from 'native-base';
import {StyleSheet, Modal, View} from 'react-native';
import CustomButton from './CustomButton';
import {getSpecificVoucher, getAllVouchers} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';

const Voucher = (props) => {
  const {vouchers, setVouchers} = React.useContext(RequestContext);
  const {userVouchers, setUserVouchers} = React.useContext(RequestContext);
  const [press, setPress] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const getUserVouchers = async () => {
    try {
      let userId = 'testing_ID';
      let data = await getSpecificVoucher(userId);
      console.log('after added, User vouchers are: ', data);
      setUserVouchers(data.reverse());
    } catch (e) {
      console.log(e.message);
    }
  };

  const getVoucherList = async () => {
    try {
      // subtract NEW 'user vouchers' from 'all vouchers'
      let finalizedData = vouchers.filter(comparer(userVouchers));

      console.log(finalizedData);
      setVouchers(finalizedData.reverse());
    } catch (e) {
      console.log(e.message);
    }
  };

  const updateRequest = async () => {
    try {
      // Update data in server
      // ...API here...
      console.log('Item added to your Voucher');

      // Update data in client
      getUserVouchers();
      getVoucherList();
      setModalVisible(!modalVisible);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <View>
      {/* Only in Avaialable Voucher */}
      {props.flag !== 'YourVouchers' && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={{fontSize: 30, color: '#183693'}}>Confirmation</Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <CustomButton
                  title="NO"
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{marginRight: 10, backgroundColor: 'red'}}
                />
                <CustomButton title="YES" onPress={() => updateRequest()} />
              </View>
            </View>
          </View>
        </Modal>
      )}

      <BaseListItem
        onPress={() => {
          setPress(!press);
        }}>
        <Left>
          <Left>
            {press ? (
              <Text style={styles.desc}>{props.description}</Text>
            ) : (
              <Text numberOfLines={1} style={styles.desc}>
                {props.description}
              </Text>
            )}
            <Text style={{color: '#A9A9A9'}}>{props.time}</Text>
          </Left>
        </Left>

        {/* Only in Avaialable Voucher */}
        {props.flag !== 'YourVouchers' && (
          <Right>
            <CustomButton
              title="GET"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </Right>
        )}
      </BaseListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  desc: {
    fontSize: 20,
    textAlign: 'justify',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Voucher;
