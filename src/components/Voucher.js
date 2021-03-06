/* eslint-disable prettier/prettier */
import React from 'react';
import {ListItem as BaseListItem, Left, Right, Text} from 'native-base';
import {StyleSheet, Modal, View} from 'react-native';
import CustomButton from './CustomButton';
import {comparer} from '../utils/Utility';
import {getSpecificVoucher, postVoucher} from '../api/VoucherAPI';
import {RequestContext} from '../context/RequestContext';
import AsyncStorage from '@react-native-community/async-storage';

const Voucher = (props) => {
  const {vouchers, setVouchers} = React.useContext(RequestContext);
  const {userVouchers, setUserVouchers} = React.useContext(RequestContext);
  const [press, setPress] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const updateNewList = async (id) => {
    try {
      console.log(id);
      const temp = [...vouchers];
      let selectedItem = temp.find((el) => el.id === id);
      let userId = await AsyncStorage.getItem('userid');
      const newIDitem = Date.now();//Create new ID for item 
      selectedItem = {
        ...selectedItem,
        id: newIDitem,
        senderID: userId,
        itemID: `${selectedItem.id}`,
      };
      setTimeout(() => {
        postVoucher(selectedItem);
      }, 0);
      let newUserVoucherList = await getSpecificVoucher(userId);
      setTimeout(() => {
        setUserVouchers(newUserVoucherList.reverse());
      }, 0);
      let finale = vouchers.filter(comparer(newUserVoucherList));
      setTimeout(() => {
        setVouchers(finale);
      }, 0);
      setTimeout(() => {
        setModalVisible(!modalVisible);
      }, 200);
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
                <CustomButton
                  title="YES"
                  onPress={() => updateNewList(props.requestId)}
                />
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
