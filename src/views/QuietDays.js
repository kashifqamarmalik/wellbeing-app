import {Button, Text, View} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
  Modal,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import UserAPI from '../api/UserAPI';
import {Question} from '../data/Question';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const QuietDays = () => {
  const [AssArray, setAssArray] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getAsssessments() {
    const res = AssessmentAPI().getUserAssessments(
      '608041952abcce6f6cc2f72a',
      '6026848f720e2f5db8c09ca9',
    );
    res
      .then((res) => {
        setAssArray(res);
        setLoaded(true);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  useEffect(() => {
    getAsssessments();
  }, [AssArray]);

  const dates = AssArray.map((x) => x.date_time);

  return (
    <View style={{backgroundColor: 'lightblue'}}>
      <Text
        style={{
          fontWeight: '700',
          margin: '5%',
          marginTop: '8%',
          marginBottom: '8%',
        }}>
        Quiet days are days without significant activity outside your regular
        working hours of 8:00 AM to 5:00 PM.{' '}
      </Text>

      <Text style={{fontSize: 17, fontWeight: 'bold', margin: '3%'}}>
        Past 4 week trend
      </Text>
      <View style={{flexDirection: 'row', marginBottom: '5%'}}>
        <View style={{margin: '3%'}}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Quiet Hours kept on:
          </Text>
          <Text>14 days</Text>
        </View>

        <View style={{marginLeft: '5%'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Quiet Hours lost on:
          </Text>
          <Text>10 days</Text>
        </View>
      </View>

      <Calendar
        // Dummy data is being used to display the functionality and idea. Because we do not have data for usage from past months.
        markedDates={{
          '2021-05-01': {selected: true, selectedColor: 'green'},
          '2021-05-03': {selected: true, selectedColor: 'green'},
          '2021-05-04': {selected: true, selectedColor: 'green'},
          '2021-04-17': {selected: true, selectedColor: 'green'},
          '2021-04-28': {selected: true, selectedColor: 'green'},
          '2021-04-23': {selected: true, selectedColor: 'green'},
          '2021-04-16': {selected: true, selectedColor: 'green'},
          '2021-04-19': {selected: true, selectedColor: 'green'},
          '2021-04-21': {selected: true, selectedColor: 'green'},
          '2021-04-05': {selected: true, selectedColor: 'green'},
          '2021-04-08': {selected: true, selectedColor: 'green'},
          '2021-04-01': {selected: true, selectedColor: 'green'},
          '2021-04-02': {selected: true, selectedColor: 'green'},
          '2021-04-10': {selected: true, selectedColor: 'green'},
          '2021-04-12': {selected: true, selectedColor: 'green'},
          '2021-04-25': {selected: true, selectedColor: 'green'},
          '2021-04-26': {selected: true, selectedColor: 'green'},
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',

    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ade8f4',
    height: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: '5%',
    marginLeft: '20%',
  },
  questionItem: {
    backgroundColor: '#90e0ef',
    height: 200,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: '5%',
  },
  typeButton: {
    backgroundColor: '#ade8f4',
    height: 50,
    width: '33.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: '5%',
  },
  buttonBottom: {
    backgroundColor: '#ade8f4',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: '25%',
  },
  inputStyle: {
    width: '80%',
    marginBottom: '5%',
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: '5%',
  },
  chooseText: {
    textAlign: 'center',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
    marginBottom: 20,
  },
  createSurvey: {
    textAlign: 'center',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 25,
    width: '100%',
    marginBottom: 20,
    marginTop: '7%',
  },
  inputQuestion: {
    marginBottom: '5%',
    textAlign: 'center',
    borderColor: '#ccc',
    height: 70,
    width: '90%',

    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
  },
  inputOption: {
    margin: '11%',
    textAlign: 'center',
    borderColor: '#ccc',
    height: 50,
    width: '80%',
    marginTop: '5%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
  },
  inputQN: {
    marginBottom: '5%',
    textAlign: 'center',
    borderColor: '#ccc',
    height: 50,
    width: '20%',
    marginTop: '5%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
  },
});

export default QuietDays;
