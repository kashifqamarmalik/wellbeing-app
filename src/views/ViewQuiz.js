import {Button, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import UserAPI from '../api/UserAPI';
import {Question} from '../data/Question';

const ViewQuiz = () => {
  const [AssArray, setAssArray] = useState([]);

  async function getAsssessments() {
    const res = AssessmentAPI().getUserAssessments(
      '608041fe2abcce6f6cc2f72c',
      '6026848f720e2f5db8c09ca9',
    );
    res
      .then((res) => {
        setAssArray(res);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  useEffect(() => {
    getAsssessments();
  }, [AssArray]);

  return (
    <View>
      <Text>View Assessments</Text>
      <FlatList
        style={{marginTop: '8%', margin: '5%'}}
        keyExtractor={(assessment) => assessment._id}
        data={AssArray}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.questionItem}>
              <Text>{item.comment}</Text>
            </TouchableOpacity>
          );
        }}></FlatList>
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
    backgroundColor: '#ffb4a2',
    height: 50,
    width: '100%',
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
    fontSize: 30,
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

export default ViewQuiz;
