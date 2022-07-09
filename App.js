import React, { useEffect, useState } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import HomeScreen from './components/Screens/HomeScreen';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { getStyles, getStatusBarColor } from './styles/styles';

export const DarkModeContext = React.createContext();

const App = () => {
  // const [ isDarkMode, setIsDarkMode ] = useState(useColorScheme() === 'dark');
  const isDarkMode = useColorScheme() === 'dark';
  const [ styles, setStyles ] = useState(getStyles(isDarkMode));
  const statusBarBgColor = getStatusBarColor(isDarkMode);

  const getContextValue = () => {
    return ({
      isDarkMode: isDarkMode,
    });
  };

  useEffect(() => {
    console.log(`App.isDarkMode: ${isDarkMode}`);
    console.log(`App.styles: ${JSON.stringify(styles)}`);

    // console.log("Manually testing return values...");
    
  }, []);

  useEffect(() => {
    setStyles(getStyles(isDarkMode));
  }, [isDarkMode])

  const getContainerStyles = () => ({
    ...styles.backgroundStyle,
    ...styles.container,
  });

  SystemNavigationBar.setNavigationColor(styles.backgroundStyle.backgroundColor);

  return (
    <DarkModeContext.Provider value={getContextValue()}>
      <SafeAreaView style={getContainerStyles()}>
        <StatusBar
          backgroundColor={statusBarBgColor} 
          barStyle={!isDarkMode ? 'light-content' : 'dark-content'} 
          />
        
        <HomeScreen />
      </SafeAreaView>
    </DarkModeContext.Provider>
  );
};

export default App;
