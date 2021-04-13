/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import all the basic component we have used
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './screens/RootStackScreen';

// import Home from './views/Home';
// import Profile from './views/Profile';
// import Contacts from './views/Contacts';
// import Reach from './views/Reach';

// const HomeStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Home: {screen: Home},
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#183693',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Wellbeings',
//       //Header title
//     },
//   },
// );
// const ProfileStack = createStackNavigator(
//   {
//     //Defination of Navigaton from setting screen
//     Profile: {screen: Profile},
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#183693',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Wellbeings',
//       //Header title
//     },
//   },
// );

// const ContactsStack = createStackNavigator(
//   {
//     //Defination of Navigaton from setting screen
//     Contacts: {screen: Contacts},
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#183693',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Wellbeings',
//       //Header title
//     },
//   },
// );

// const ReachStack = createStackNavigator(
//   {
//     //Defination of Navigaton from setting screen
//     Reach: {screen: Reach},
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#183693',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Wellbeings',
//       //Header title
//     },
//   },
// );

// const App = createBottomTabNavigator(
//   {
//     Home: {screen: HomeStack},
//     Profile: {screen: ProfileStack},
//     Contacts: {screen: ContactsStack},
//     Reach: {screen: ReachStack},
//   },
//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-home${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Profile') {
//           iconName = `ios-person${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Contacts') {
//           iconName = `ios-people${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Reach') {
//           iconName = `ios-wifi${focused ? '' : '-outline'}`;
//         }
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#ffffff',
//       inactiveTintColor: '#183693',
//       activeBackgroundColor: '#183693',
//       inactiveBackgroundColor: '#ffffff',
//     },
//   },
// );
// export default createAppContainer(App);

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
