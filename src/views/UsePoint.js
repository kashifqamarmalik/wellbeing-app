/* eslint-disable prettier/prettier */
import React from 'react';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import AvaiableVouchers from '../components/AvaiableVouchers';
import YourPoints from '../components/YourVouchers';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Reach = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index);
  };

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
      {selectedIndex === 0 && <AvaiableVouchers />}
      {selectedIndex === 1 && <YourPoints />}
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
