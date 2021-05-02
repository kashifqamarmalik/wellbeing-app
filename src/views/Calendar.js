import {Button, Text, View} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import UserAPI from '../api/UserAPI';
import {Question} from '../data/Question';

const Calendar = () => {
  const [AssArray, setAssArray] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getAsssessments() {
    const res = AssessmentAPI().getUserAssessments(
      '6080423e2abcce6f6cc2f72e',
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

  const ans1 = AssArray.map((x) => x.answers[0]);
  const score1 = ans1.map((x) => x.score);
  const num1 = score1.map((x) => x.$numberDecimal);
  return (
    <View>
      <FlatList
        keyExtractor={(assessment) => assessment._id}
        data={AssArray}
        renderItem={({item}) => {
          var fullDate;
          const d = item.date_time;
          const month = d.slice(6, 7);
          const day = d.slice(9, 10);

          switch (month) {
            case '01':
              fullDate = 'January' + day + ', 2021';
              break;
            case '02':
              fullDate = 'Febraury' + day + ', 2021';
              break;
            case '03':
              fullDate = 'March' + day + ', 2021';
              break;
            case '04':
              fullDate = 'April' + day + ', 2021';
              break;
            case '05':
              fullDate = 'May' + day + ', 2021';
              break;
            case '06':
              fullDate = 'June' + day + ', 2021';
              break;
            case '07':
              fullDate = 'July' + day + ', 2021';
            case '08':
              fullDate = 'August' + day + ', 2021';
            case '09':
              fullDate = 'September' + day + ', 2021';
            case '10':
              fullDate = 'October' + day + ', 2021';

            case '11':
              fullDate = 'Novemeber' + day + ', 2021';

            case '12':
              fullDate = 'December' + day + ', 2021';
          }
          return (
            <View style={styles.questionItem}>
              <Text style={styles.createSurvey}>May {day}, 2021</Text>
              <Text style={styles.chooseText}>
                Feeling: {item.answers[0].score.$numberDecimal} - Workload:{' '}
                {item.answers[1].score.$numberDecimal}
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  color: '#023e8a',
                  fontWeight: 'bold',
                  fontSize: 20,
                  width: '100%',
                  marginBottom: 20,
                }}>
                Comment: {item.comment}
              </Text>
            </View>
          );
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

export default Calendar;
