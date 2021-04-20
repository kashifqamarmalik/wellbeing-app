import React, {useEffect} from 'react';
import {Text, View} from 'native-base';
import CustomButton from '../components/CustomButton';
import {Calendar} from 'react-native-plain-calendar';
import {StyleSheet} from 'react-native';
import UserAPI from '../api/UserAPI.js';

const Home = () => {
  return (
    <View>
      <View style={styles.button}>
        <CustomButton title="Quick Assessment" />
        <CustomButton title="View Assessment" />
      </View>

      <View style={styles.calendar}>
        <Calendar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginTop: '30%',
  },
  button: {
    marginTop: '10%',
  },
});

export default Home;
