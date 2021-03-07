/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Profile = () => {
  return (
    <View style={{marginTop: '30%'}}>
      <Text style={styles.Text}>Profile</Text>
      <Text style={styles.Text}>John Doe</Text>
      <Text style={styles.Text}>Points: 150</Text>
      <Text style={styles.Text}>Surveys Taken: 7</Text>
      <CustomButton title="Use Points" />
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Profile;
