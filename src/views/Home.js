import React from 'react';
import {Text, View} from 'native-base';
import CustomButton from '../components/CustomButton';

const Home = () => {
  return (
    <View>
      <CustomButton title="Quick Assesment" />
      <CustomButton title="View Assesment" />
    </View>
  );
};

export default Home;
