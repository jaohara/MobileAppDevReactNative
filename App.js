import React, { useEffect, useState } from 'react';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import NavHeader from './components/NavHeader';

import HomeScreen from './components/Screens/HomeScreen';
import PeopleScreen from './components/Screens/PeopleScreen';
import PersonDetailScreen from './components/Screens/PersonDetailsScreen';

import { getStyles, getStatusBarColor } from './styles/styles';

export const IMAGE_ROUTE = "http://placeimg.com/640/480/people";
export const AppContext = React.createContext();
const Stack = createNativeStackNavigator();

const DEBUG_LOGGING = false;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [ styles, setStyles ] = useState(getStyles(isDarkMode));
  const statusBarBgColor = getStatusBarColor(isDarkMode);

  const [ currentPerson, setCurrentPerson ] = useState(null);
  const [ currentPersonIndex, setCurrentPersonIndex ] = useState(undefined);
  const [ people, setPeople ] = useState([]);
  const [ peopleLoaded, setPeopleLoaded ] = useState(false);
  const [ peopleImages, setPeopleImages ] = useState([]);
  const [ peopleImagesLoaded, setPeopleImagesLoaded ] = useState(false);

  const peopleScreenContext = {
    currentPerson: currentPerson,
    currentPersonIndex: currentPersonIndex,
    people: people,
    peopleImages: peopleImages,
    peopleImagesLoaded: peopleImagesLoaded,
    peopleLoaded: peopleLoaded,
    setCurrentPerson: setCurrentPerson,
    setCurrentPersonIndex: setCurrentPersonIndex,
    setPeople: setPeople,
    setPeopleImages: setPeopleImages,
    setPeopleImagesLoaded: setPeopleImagesLoaded,
    setPeopleLoaded: setPeopleLoaded,
  };

  const getContextValue = () => {
    // hardcoding peopleApiRoute for now, probably should be in .env
    return ({
      isDarkMode: isDarkMode,
      peopleApiRoute: "https://fakerapi.it/api/v1/users?_quantity=10",
      imageRoute: IMAGE_ROUTE,
      ...peopleScreenContext,
    });
  };

  useEffect(() => {
    if (DEBUG_LOGGING) {
      console.log(`App.isDarkMode: ${isDarkMode}`);
      console.log(`App.styles: ${JSON.stringify(styles)}`);
    }
  }, []);

  useEffect(() => {
    setStyles(getStyles(isDarkMode));
  }, [isDarkMode])

  const getContainerStyles = () => ({
    ...styles.backgroundStyle,
    ...styles.container,
  });

  SystemNavigationBar.setNavigationColor(styles.backgroundStyle.backgroundColor);

  const getNavHeader = ({ navigator, route, options }) => (    
    <NavHeader
      onBackPress={navigator ? navigator.goBack : () => {}}
    >
      {route.name}
    </NavHeader>
  );

  const getNavStack = () => (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerBackVisible: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: styles.backgroundStyle.backgroundColor
        },
        headerTintColor: styles.backgroundStyle.color,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />

      <Stack.Screen 
        name="People" 
        component={PeopleScreen} 
      />
      
      <Stack.Screen 
        name="Person" 
        component={PersonDetailScreen}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <AppContext.Provider value={getContextValue()}>
        <SafeAreaView style={getContainerStyles()}>
          <StatusBar
            backgroundColor={statusBarBgColor} 
            barStyle={!isDarkMode ? 'light-content' : 'dark-content'} 
            />

          { getNavStack() }
        
        </SafeAreaView>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
