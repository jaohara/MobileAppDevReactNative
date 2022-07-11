import React, { useContext } from 'react';
import { Text, Button, View } from "react-native";

import Header from './Header';

import useStyles from '../hooks/useStyles';

const NavHeader = ({ children, onBackPress }) => {
  const { styles } = useStyles();


  return (
    <View style={styles.navWrapper}>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={onBackPress}
          title={"Back"}
          style={styles.buttons}
        />
      </View>

      <Header>
        { children }
      </Header>
    </View>
  )
}

export default NavHeader;