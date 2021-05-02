import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'native-base';
import CustomButton from '../components/CustomButton';
import {Calendar} from 'react-native-plain-calendar';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AssessmentAPI from '../api/AssessmentAPI';
import {VictoryPie} from 'victory-native';

const Home = ({navigation}) => {
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

  const answers1 = AssArray.map((x) => x.answers[0]);
  const score1 = answers1.map((x) => parseInt(x.score.$numberDecimal));

  const answers2 = AssArray.map((x) => x.answers[1]);
  const score2 = answers2.map((x) => parseInt(x.score.$numberDecimal));
  var sum1 = 0;
  var sum2 = 0;

  for (var i = 0; i < score1.length; i++) {
    sum1 += score1[i];
  }

  for (var i = 0; i < score1.length; i++) {
    sum2 += score2[i];
  }

  const a = sum1;
  const b = sum2;
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
          onPress={() => navigation.navigate('QuietDays')}>
          <Text style={styles.textStyle}>Quiet Days</Text>
          <Ionicons name="mic-off" size={100} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => navigation.navigate('MoodCalendar')}>
          <Text style={styles.textStyle}>Mood Calender</Text>
          <Ionicons name="calendar" size={100} />
        </TouchableOpacity>
      </View>
      <VictoryPie
        height={300}
        colorScale={['orange', 'navy']}
        animate={{
          duration: 2000,
        }}
        data={[
          {x: 'Workload', y: a},
          {x: 'Feeling', y: b},
        ]}
      />
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
