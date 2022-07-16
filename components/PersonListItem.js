import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import useStyles from '../hooks/useStyles';
import { colors } from '../styles/styles';

const PersonListItem = ({ 
  index, 
  navigation, 
  person, 
  setCurrentPerson,
  setCurrentPersonIndex, 
}) => {
  const { styles } = useStyles();

  const personName = `${person.firstname} ${person.lastname}`;

  const handlePress = () => {
    setCurrentPerson(person);
    setCurrentPersonIndex(index);
    navigation && navigation.navigate("Person", {name: personName});
  }

  return (
    <TouchableOpacity
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
            {personName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PersonListItem;

