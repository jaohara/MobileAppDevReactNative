import React, { useContext } from 'react';

import { Text, View } from 'react-native';

import { DarkModeContext } from '../App';

import { getStyles } from '../styles/styles';


const ListItem = ({ children }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const styles = getStyles(isDarkMode);



  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
};

export default ListItem;