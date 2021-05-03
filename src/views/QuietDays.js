import {Text, View} from 'native-base';
import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';

const QuietDays = () => {
  return (
    <ScrollView style={{backgroundColor: 'lightblue'}}>
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
    </ScrollView>
  );
};

export default QuietDays;
