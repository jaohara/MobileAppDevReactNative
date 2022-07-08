import React from 'react';

import { Text, FlatList, View } from 'react-native';

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
  return (
    <Screen title={homeScreenTitle}>
      <Text>
        This is an example of a React Native application. It is for my Mobile App Development class.
        By using React Native, I can use JavaScript and the React framework to create and render UIs
        with system native components without using the mobile platform's preferred language, such as 
        Kotlin or Swift. It has the added benefit of being able to be built and deployed on different
        platforms. All in all, pretty sweet.
      </Text>

      <Header>FlatList Example</Header>
x
      <View>
        <FlatList
          data={exampleList}
          renderItem={({item}) => renderListItem(item)}
        />
      </View>
    </Screen>
  );
};

export default HomeScreen;