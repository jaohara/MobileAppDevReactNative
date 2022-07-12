import React from 'react';

import { Image, Text, View } from 'react-native';

import useStyles from '../hooks/useStyles';

const PersonListItem = ({ children, person }) => {
  const { styles } = useStyles();

  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: `${person.image}/${Math.random()}`}}
        style={styles.personListItemImage}
      />
      <View style={styles.personListItemTextWrapper}>
        <Text style={{...styles.text, ...styles.nameText}}>
          {`${person.firstname} ${person.lastname}`}
        </Text>

        <Text style={{...styles.text, ...styles.detailText}}>
          {person.username}
        </Text>

        <Text style={{...styles.text, ...styles.detailText}}>
          {person.email}
        </Text>

        <Text style={{...styles.text, ...styles.detailText}}>
          {person.website}
        </Text>
      </View>
    </View>
  );
};

export default PersonListItem;