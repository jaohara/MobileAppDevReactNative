import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { styles } from '../styles/styles';

const Header = ({ children }) => {
  return (
    <Text style={styles.header}>
      { children }
    </Text>
  )
}

export default Header;