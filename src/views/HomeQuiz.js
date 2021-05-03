import {Text, View} from 'native-base';
import {StyleSheet, TextInput, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import AssessmentAPI from '../api/AssessmentAPI';
import {Assessment} from '../data/Assessment';
import React, {useEffect, useState} from 'react';
import {Question} from '../data/Question';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-community/async-storage';

const HomeQuiz = (props) => {
  const [quiz, setQuiz] = useState();
  const [userId, setUserId] = useState(undefined);
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

  const getUserId = async () => {
    try {
      return await AsyncStorage.getItem('userid');
    } catch (err) {
      console.log('Error in Profile: ', err);
    }
  };

  useEffect(() => {
    getData();
    getUserId().then((id) => {
      setUserId(id);
    });
  }, [quiz]);

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
    assessment.setUserId(userId);
    assessment.setAssessmentName('Quick Assessment');
    assessment.setQuestionScore('60268600a5369fd7c2e0e19f', score1);
    assessment.setQuestionScore('6026876aa5369fd7c2e0e1a0', score2);
    console.log('score1', score1);
    console.log('score2', score2);
    if (userId !== undefined) {
      let res = await AssessmentAPI()
        .putCompletedAssessment(assessment)
        .then(props.navigation.navigate('Home'));
    }
  };

  return (
    <ScrollView>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.inputQuestion}
        placeholder="Write your comment"
        value={comment}
        onChangeText={setComment}
      />
      <Text style={styles.question}>
        Please rate your personal feeling towards workload.
      </Text>
      <Text style={styles.question}>{score1}</Text>

      <View style={styles.container}>
        <Slider
          maximumValue={10}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={score1}
          onValueChange={(score1) => setScore1(score1)}
        />
      </View>

      <Text style={styles.question}>
        Please rate the intensity of the workload.
      </Text>
      <Text style={styles.question}>{score2}</Text>

      <View style={styles.container}>
        <Slider
          maximumValue={10}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={score2}
          onValueChange={(score2) => setScore2(score2)}
        />
      </View>

      <CustomButton
        title="Submit"
        onPress={() => {
          post();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '12%',
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
    fontSize: 20,

    padding: '1%',
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
