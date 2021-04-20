import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../views/Profile';
import UsePoint from '../../views/UsePoint';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
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
          name="UsePoint"
          component={UsePoint}
          options={{
            //Header customization of the perticular Screen
            headerStyle: {
              backgroundColor: '#183693',
            },
            headerTintColor: '#FFFFFF',
            title: 'Use Point',
            //Header title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileStack;
