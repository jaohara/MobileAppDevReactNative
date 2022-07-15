import React from 'react';

import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import useStyles from '../hooks/useStyles';
import { colors } from '../styles/styles';

const PersonListItem = ({ navigation, person, setCurrentPerson }) => {
  const { styles } = useStyles();

  const handlePress = () => {
    setCurrentPerson(person);
    navigation && navigation.navigate("Person");
  }

  return (
    <TouchableHighlight
      onPress={() => handlePress()}
    >
      <View style={styles.listItem}>
        <Icon
          color={colors.blue}
          name="person-circle"
          size={32}
          />
        <View style={styles.personListItemTextWrapper}>
          <Text style={{...styles.text, ...styles.nameText}}>
            {`${person.firstname} ${person.lastname}`}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PersonListItem;

