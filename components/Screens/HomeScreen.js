import React, { useContext } from 'react';

import { Text, FlatList, View, Button } from 'react-native';

import useStyles from '../../hooks/useStyles';

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

const HomeScreen = ({ navigation, children }) => {
  const { styles } = useStyles();

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
    <Screen title={homeScreenTitle}>
      {/* <FlatList
        data={exampleList}
        ListHeaderComponent={getListHeaderComponent()}
        renderItem={({item}) => renderListItem(item)}
      /> */}
      <Text style={styles.text}>
        This is the home screen. From here I will navigate to 
        other screens and see if I can find my way back.
      </Text>

      <View>
        <Button
          title='People Screen'
          onPress={() => navigation && navigation.navigate("People")}
          color={styles.buttons.color}
        />
      </View>

    </Screen>
  );
};

export default HomeScreen;