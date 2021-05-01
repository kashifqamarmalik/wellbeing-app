import React from 'react';
import {Text, View, Button} from 'native-base';
import CustomButton from '../components/CustomButton';
import {Calendar} from 'react-native-plain-calendar';
import {StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.button}>
        <CustomButton
          title="Asses"
          onPress={() => navigation.navigate('HomeQuiz')}
        />
        <CustomButton
          title="History"
          onPress={() => navigation.navigate('ViewQuiz')}
        />
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
