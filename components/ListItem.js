import React from 'react';

import { Text, View } from 'react-native';

import { styles } from '../styles/styles';

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text>{children}</Text>
    </View>
  )
};

export default ListItem;