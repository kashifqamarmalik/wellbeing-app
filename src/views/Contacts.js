/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet, Linking, Platform} from 'react-native';
import CustomButton from '../components/CustomButton';

const contacts = [
  {phone: '090778601', email: 'health@nokia.com'},
  {phone: '090778602', email: 'hr@nokia.com'},
  {phone: '090778603', email: 'management@nokia.com'},
];

const Contacts = () => {
  const calling = (phone) => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telpromt:${phone}`);
    }
  };

  const email = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  return contacts.map((contact) => {
    return (
      <View style={styles.button}>
        <View style={styles.B1}>
          <Text style={styles.Text}>E-Mail: {contact.email}</Text>
          <Text style={styles.Text}>Phone: {contact.phone}</Text>
          <View style={styles.buttons}>
            <CustomButton onPress={() => calling(contact.phone)} title="Call" />
            <CustomButton
              onPress={() => email(contact.email)}
              style={{marginLeft: 20}}
              title="E-Mail"
            />
          </View>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  B1: {
    marginTop: '10%',
  },
  Text: {
    textAlign: 'center',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Contacts;
