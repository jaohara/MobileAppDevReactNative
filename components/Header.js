import React, { useContext } from 'react';
import { Text } from "react-native";
import { getStyles } from '../styles/styles';

import { DarkModeContext } from '../App';

const Header = ({ children }) => {
  // future note - this whole pattern should probably be a hook
  const { isDarkMode } = useContext(DarkModeContext);
  const styles = getStyles(isDarkMode);

  return (
    <Text style={styles.header}>
      { children }
    </Text>
  )
}

export default Header;