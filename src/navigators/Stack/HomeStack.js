import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../views/Home';
import HomeQuiz from '../../views/HomeQuiz';
import ViewQuiz from '../../views/ViewQuiz';
import QuietDays from '../../views/QuietDays';
import MoodCalendar from '../../views/MoodCalendar';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Mindscape',
            //Header title
          }}
        />
        <Stack.Screen
          name="HomeQuiz"
          component={HomeQuiz}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Assessment',
            //Header title
          }}
        />
        <Stack.Screen
          name="ViewQuiz"
          component={ViewQuiz}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Your Assessments',
            //Header title
          }}
        />
        <Stack.Screen
          name="QuietDays"
          component={QuietDays}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Quiet Days',
            //Header title
          }}
        />
        <Stack.Screen
          name="MoodCalendar"
          component={MoodCalendar}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Mood Calendar',
            //Header title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
