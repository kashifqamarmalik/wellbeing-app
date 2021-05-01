import React from 'react';
import {Text, View, Button} from 'native-base';
import CustomButton from '../components/CustomButton';
import {Calendar} from 'react-native-plain-calendar';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('HomeQuiz')}>
          <Text style={styles.textStyle}>Asses</Text>
          <Ionicons name="receipt" size={100} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => navigation.navigate('ViewQuiz')}>
          <Text style={styles.textStyle}>History</Text>
          <Ionicons name="time" size={100} />
        </TouchableOpacity>
      </View>
      <View style={styles.button1}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('HomeQuiz')}>
          <Text style={styles.textStyle}>Quiet Days</Text>
          <Ionicons name="mic-off" size={100} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => navigation.navigate('ViewQuiz')}>
          <Text style={styles.textStyle}>Mood Calender</Text>
          <Ionicons name="calendar" size={100} />
        </TouchableOpacity>
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
    margin: '10%',
    flexDirection: 'row',
    marginBottom: '1%',
  },
  button1: {
    margin: '10%',
    flexDirection: 'row',
    marginTop: '1%',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#ff7b00',
    width: 150,
    height: 150,
    padding: 5,
    marginLeft: '5%',
    borderRadius: 20,
  },
  buttonStyle1: {
    alignItems: 'center',
    backgroundColor: '#ff7b00',
    width: 150,
    height: 150,
    padding: 5,
    marginRight: '5%',
    borderRadius: 20,
  },
  textStyle: {
    fontWeight: 'bold',
  },
});

export default Home;
