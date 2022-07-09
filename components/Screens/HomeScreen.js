import React, { useContext } from 'react';

import { Text, FlatList, View } from 'react-native';

import { DarkModeContext } from '../../App';

import { getStyles } from '../../styles/styles';

import Header from '../Header';
import ListItem from '../ListItem';
import Screen from '../Screen';

const homeScreenTitle = "HW8: React Native"

const exampleList = [
  "New York Mets",
  "Atlanta Braves",
  "Philadelphia Phillies",
  "Miami Marlins",
  "Washington Nationals",
];

const renderListItem = (item) => (<ListItem>{item}</ListItem>)

const HomeScreen = ({ children }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const styles = getStyles(isDarkMode);

  const getListHeaderComponent = () => (
    <>
      <Text style={styles.text}>
        This is an example of a React Native application. It is for my Mobile App Development class.
        By using React Native, I can use JavaScript and the React framework to create and render UIs
        with system native components without using the mobile platform's preferred language, such as 
        Kotlin or Swift. It has the added benefit of being able to be built and deployed on different
        platforms. All in all, pretty sweet.
      </Text>

      <Header>FlatList Example</Header>
    </>
  );

  return (
    <Screen title={homeScreenTitle} isScrollView={false}>
      <FlatList
        data={exampleList}
        ListHeaderComponent={getListHeaderComponent()}
        renderItem={({item}) => renderListItem(item)}
      />
    </Screen>
  );
};

export default HomeScreen;