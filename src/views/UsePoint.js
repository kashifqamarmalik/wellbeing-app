/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import AvaiableVouchers from '../components/AvaiableVouchers';
import YourPoints from '../components/YourVouchers';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Reach = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const [avaiableVouchers, setAvaiableVoucher] = React.useState(ListOfVoucher);
  // const [yourVouchers, setYourVouchers] = React.useState([]);

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index);
  };

  // const updateAvailableVouchers = (id) => {
  //   const tempAvailList = [...avaiableVouchers];
  //   const newAvailList = tempAvailList.filter((el) => el._id !== id);
  //   const addedItem = tempAvailList.filter((el) => el._id == id);
  //   setAvaiableVoucher(newAvailList);
  //   setYourVouchers([...yourVouchers, addedItem]);
  // };

  return (
    <Container>
      <SegmentedControlTab
        values={['Available', 'Your Vouchers']}
        selectedIndex={selectedIndex}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        onTabPress={handleSingleIndexSelect}
        tabTextStyle={styles.text}
        tabsContainerStyle={styles.container}
      />
      {selectedIndex === 0 && (
        <AvaiableVouchers
        // list={avaiableVouchers}
        // updateAvailableVouchers={updateAvailableVouchers}
        />
      )}
      {selectedIndex === 1 && (
        <YourPoints
        // list={yourVouchers}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#183693',
  },
  tabStyle: {
    borderColor: '#183693',
    marginTop: 15,
  },
  activeTabStyle: {
    backgroundColor: '#183693',
    color: '#ffffff',
  },
});

export default Reach;
