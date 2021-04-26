import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../views/Home';
import HomeQuiz from '../../views/HomeQuiz';

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
            title: 'Wellbeing',
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
            title: 'The Quiz',
            //Header title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
