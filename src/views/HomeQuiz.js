import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import Assesment from '../data/Assessment';
import React, {useEffect, useState} from 'react';

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
    const res = await fetch(`http://192.168.1.223:8066/api/assessment/basic`);
    res
      .json()
      .then((res) => {
        setQuiz(res);
        setLoaded(true);
        console.log('fetched quiz', quiz);
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

  useEffect(() => {
    getData();
  });

  return (
    <View>
      <Text>{q1}</Text>
      <Text>{max1}</Text>
      <Text>{min1}</Text>
      <Text>{q2}</Text>
      <Text>{max2}</Text>
      <Text>{min2}</Text>
    </View>
  );
};

export default HomeQuiz;
