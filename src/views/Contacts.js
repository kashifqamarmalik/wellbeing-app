/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Contacts = () => {
  return (
    <View style={styles.button}>
      <View style={styles.B1}>
        <CustomButton title="Human Resources" />
        <Text style={styles.Text}>E-Mail: example@example.com</Text>
        <Text style={styles.Text}>Phone: 090778601</Text>
      </View>
      <View style={styles.B2}>
        <CustomButton title="Occupational Health" />
        <Text style={styles.Text}>E-Mail: example@example.com</Text>
        <Text style={styles.Text}>Phone: 090778601</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  B1: {
    marginTop: '15%',
  },
  B2: {
    marginTop: '40%',
  },
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

export default Contacts;
