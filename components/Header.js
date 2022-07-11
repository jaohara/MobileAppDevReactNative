import React, { useContext } from 'react';
import { Text } from "react-native";

import useStyles from '../hooks/useStyles';

const Header = ({ children }) => {
  const { styles } = useStyles();


  return (
    <Text style={styles.header}>
      { children }
    </Text>
  )
}

export default Header;