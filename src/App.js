/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {RequestProvider} from './context/RequestContext';
import Navigator from './navigators/Navigator';
const App = () => {
  return (
    <RequestProvider>
      <Navigator />
    </RequestProvider>
  );
};

export default App;
