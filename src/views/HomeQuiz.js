import {Button, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import UserAPI from '../api/UserAPI';
import {Question} from '../data/Question';

const HomeQuiz = () => {
  const [quiz, setQuiz] = useState();
  const [loaded, setLoaded] = useState(false);
  const [q1, setQ1] = useState();
  const [max1, setMax1] = useState();
  const [min1, setMin1] = useState();
  const [q2, setQ2] = useState();
  const [max2, setMax2] = useState();
  const [min2, setMin2] = useState();
  const [comment, setComment] = useState();
  const [score1, setScore1] = useState();
  const [score2, setScore2] = useState();

  //fetching the quiz from the API

  async function getData() {
    const res = AssessmentAPI().getBasicAssessment();
    res
      .then((res) => {
        setQuiz(res);

        setLoaded(true);
        if (loaded) {
          setQ1(quiz.questions[0].question_string);
          setMax1(quiz.questions[0].max_text);
          setMin1(quiz.questions[0].min_text);
          setQ2(quiz.questions[1].question_string);
          setMax2(quiz.questions[1].max_text);
          setMin2(quiz.questions[1].min_text);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  useEffect(() => {
    getData();
  }, [quiz]);

  const op1 = [
    {
      label: max1,
    },
    {
      label: min1,
    },
  ];

  const op2 = [
    {
      label: max2,
    },
    {
      label: min2,
    },
  ];

  let a1 = new Question(
    '60268600a5369fd7c2e0e19f',
    'How are you feeling?',
    0,
    10,
    'Bad',
    'Good',
  );

  let a2 = new Question(
    '6026876aa5369fd7c2e0e1a0',
    'How is your workload?',
    0,
    10,
    'Low',
    'Heavy',
  );
  const answers = [a1, a2];

  const post = async () => {
    let assessment = new Assessment(
      '6026848f720e2f5db8c09ca9',
      answers,
      comment,
    );
    assessment.setUserId('608041fe2abcce6f6cc2f72c');
    assessment.setAssessmentName('Quick Assessment');
    assessment.setQuestionScore('60268600a5369fd7c2e0e19f', score1);
    assessment.setQuestionScore('6026876aa5369fd7c2e0e1a0', score2);
    console.log('score1', score1);
    console.log('score2', score2);

    let res = await AssessmentAPI().putCompletedAssessment(assessment);
    //let json = await res.json();
    //console.log('json', res);
  };

  return (
    <View>
      <Text style={styles.question}>{q1}</Text>
      <RadioButtonRN
        data={op1}
        selectedBtn={(e) => {
          if (e === 'Good') {
            setScore1(10);
          } else {
            setScore1(0);
          }
        }}
      />
      <Text style={styles.question}>{q2}</Text>
      <RadioButtonRN
        data={op2}
        selectedBtn={(e) => {
          if (e === 'Low') {
            setScore2(10);
          } else {
            setScore2(0);
          }
        }}
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.inputQuestion}
        placeholder="Write your comment"
        value={comment}
        onChangeText={setComment}
      />
      <CustomButton
        title="Submit"
        onPress={() => {
          post();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '15%',
    paddingTop: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  viewButton: {
    backgroundColor: '#ade8f4',
    height: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: '5%',
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#ade8f4',
    elevation: 2, // Android
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: 10,
  },
  surveyTitle: {
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 20,
  },
  question: {
    textAlign: 'center',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: '10%',
  },
  nameText: {
    textAlign: 'left',
    color: '#023e8a',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  inputQuestion: {
    margin: '6%',
    textAlign: 'center',
    borderColor: '#ccc',
    height: 70,
    width: '90%',

    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
  },
  roundButton1: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
    position: 'absolute',
    right: 0,
    marginTop: 50,
    margin: 15,
  },
});

export default HomeQuiz;
