import React from 'react';

import { Text, View } from 'react-native';

import useStyles from '../hooks/useStyles';


const ListItem = ({ children }) => {
  const { styles } = useStyles();


  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
};

export default ListItem;