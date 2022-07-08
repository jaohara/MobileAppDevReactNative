/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Header from './components/Header';
import HomeScreen from './components/Screens/HomeScreen';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { styles, isDarkMode, statusBarBgColor } from './styles/styles';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <SafeAreaView style={styles.backgroundStyle}>


      {
        // keeping this, but flipping the 
      }
      <StatusBar
        backgroundColor={statusBarBgColor} 
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'} 
        />
      
      <HomeScreen />

      {/* <Header>Test Header 1</Header>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>

      <Header>Test Header 2</Header>

        <View
          style={styles.backgroundStyle}>


        </View>
      </ScrollView> */}

    </SafeAreaView>
  );
};

export default App;
