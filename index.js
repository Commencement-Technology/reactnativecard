/**
 * @format
 */

import React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigators/RootNavigator';
import {darkTheme, lightTheme} from './src/styles/theme';

const App1 = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <App />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App1);
