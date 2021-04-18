import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './views/Home';
import HomeQuiz from './views/HomeQuiz';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Wellbeings',
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
            title: 'Home Quiz',
            //Header title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
