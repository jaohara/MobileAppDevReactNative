import React from 'react';

import { Image, Text, View } from 'react-native';

import useStyles from '../hooks/useStyles';

const PersonListItem = ({ children, person }) => {
  const { styles } = useStyles();

  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>
        {`${person.firstname} ${person.lastname}`}
      </Text>
    </View>
  );
};

export default PersonListItem;