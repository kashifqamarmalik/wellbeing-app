import {Text, View} from 'native-base';
import {ScrollView} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';

const MoodCalendar = () => {
  return (
    <ScrollView style={{backgroundColor: 'lightblue'}}>
      <Text
        style={{
          fontWeight: '700',
          margin: '5%',
          marginTop: '8%',
          marginBottom: '8%',
        }}>
        Mood Calendar gauges your mood on a day based on your ratings of
        personal feeling and workload.
      </Text>

      <Text style={{fontSize: 17, fontWeight: 'bold', margin: '3%'}}>
        Types of moods
      </Text>
      <View
        style={{flexDirection: 'row', marginBottom: '15%', marginTop: '5%'}}>
        <View style={{marginLeft: '5%'}}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Happiness</Text>
        </View>

        <View style={{marginLeft: '5%'}}>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Satisfaction</Text>
        </View>
        <View style={{marginLeft: '5%'}}>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Sadness</Text>
        </View>
        <View style={{marginLeft: '5%'}}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>_____</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Fear</Text>
        </View>
      </View>

      <Calendar
        // Dummy data is being used to display the functionality and idea. Because we do not have data for usage from past months.
        markedDates={{
          '2021-05-02': {selected: true, selectedColor: 'blue'},
          '2021-05-03': {selected: true, selectedColor: 'green'},
          '2021-05-04': {selected: true, selectedColor: 'orange'},
          '2021-04-30': {selected: true, selectedColor: 'orange'},
          '2021-04-29': {selected: true, selectedColor: 'green'},
          '2021-04-28': {selected: true, selectedColor: 'green'},
          '2021-04-27': {selected: true, selectedColor: 'green'},
          '2021-04-26': {selected: true, selectedColor: 'blue'},
          '2021-04-23': {selected: true, selectedColor: 'blue'},
          '2021-04-22': {selected: true, selectedColor: 'blue'},
          '2021-04-21': {selected: true, selectedColor: 'red'},
          '2021-04-20': {selected: true, selectedColor: 'orange'},
          '2021-04-19': {selected: true, selectedColor: 'green'},
          '2021-04-16': {selected: true, selectedColor: 'blue'},
          '2021-04-15': {selected: true, selectedColor: 'green'},
          '2021-04-14': {selected: true, selectedColor: 'orange'},
          '2021-04-13': {selected: true, selectedColor: 'orange'},
          '2021-04-12': {selected: true, selectedColor: 'red'},
          '2021-04-09': {selected: true, selectedColor: 'orange'},
          '2021-04-08': {selected: true, selectedColor: 'green'},
          '2021-04-07': {selected: true, selectedColor: 'blue'},
          '2021-04-06': {selected: true, selectedColor: 'green'},
          '2021-04-05': {selected: true, selectedColor: 'orange'},
          '2021-04-02': {selected: true, selectedColor: 'orange'},
          '2021-04-01': {selected: true, selectedColor: 'orange'},
        }}
      />
    </ScrollView>
  );
};

export default MoodCalendar;
