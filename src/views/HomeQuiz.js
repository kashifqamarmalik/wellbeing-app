import {Button, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';

const HomeQuiz = () => {
  const [quiz, setQuiz] = useState();
  const [loaded, setLoaded] = useState(false);
  const [q1, setQ1] = useState();
  const [max1, setMax1] = useState();
  const [min1, setMin1] = useState();
  const [q2, setQ2] = useState();
  const [max2, setMax2] = useState();
  const [min2, setMin2] = useState();

  //fetching the quiz from the API
  async function getData() {
    //Change the AssessmentAPI to use your IP by changing it in config
    AssessmentAPI().getBasicAssessment()
      .then((res) => {
        setQuiz(res);
        setLoaded(true);
        //q1 = quiz.questions[0].question_string;
        setQ1(quiz.questions[0].question_string);
        setMax1(quiz.questions[0].max_text);
        setMin1(quiz.questions[0].min_text);
        setQ2(quiz.questions[1].question_string);
        setMax2(quiz.questions[1].max_text);
        setMin2(quiz.questions[1].min_text);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  useEffect( () => {
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

  const ass = {
    comment: 'This assessment came from the app',
    user_id: '608041de2abcce6f6cc2f72b',
    assessment_id: '6026848f720e2f5db8c09ca9',
    answers: [
      {
        score: {
          $numberDecimal: '-1',
        },
        question_id: '60268600a5369fd7c2e0e19f',
        question_string: 'How are you feeling?',
        min_score: {
          $numberDecimal: '0',
        },
        max_score: {
          $numberDecimal: '10',
        },
        max_text: 'Good',
        min_text: 'Bad',
      },
      {
        score: {
          $numberDecimal: '10',
        },
        question_id: '6026876aa5369fd7c2e0e1a0',
        question_string: 'How is your workload?',
        min_score: {
          $numberDecimal: '0',
        },
        max_score: {
          $numberDecimal: '10',
        },
        max_text: 'Heavy',
        min_text: 'Low',
      },
    ],
  };
  const post = async () => {
    let assessment = new Assessment(
      '6026848f720e2f5db8c09ca9',
      [],
      'Hello from app',
    );
    assessment.setUserId('606c9a4094c4d13c0cbfd43a');
    assessment.setAssessmentName('Quick Assessment');
    //This will return status 400 because the questions/answers array is empty
    let res = await AssessmentAPI().putCompletedAssessment(assessment);
    console.log('json', res);
  };

  return (
    <View>
      <Text style={styles.question}>{q1}</Text>
      <RadioButtonRN data={op1} selectedBtn={(e) => console.log(e)} />
      <Text style={styles.question}>{q2}</Text>
      <RadioButtonRN data={op2} selectedBtn={(e) => console.log(e)} />
      <CustomButton
        title="Submit"
        onPress={async () => {
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
