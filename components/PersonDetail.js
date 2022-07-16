import React from 'react'

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { colors } from '../styles/styles';
import useStyles from '../hooks/useStyles';

const iconStrings = {
  name: "happy-outline",
  username: "at-outline",
  email: "mail-outline",
  website: "globe-outline",
};

const DEFAULT_COLOR = "blue";
const ICON_SIZE = 24;

const PersonDetail = ({ color = DEFAULT_COLOR, icon = "none", value }) => {
  const { styles } = useStyles();

  const getColorIfValid = () => (Object.keys(colors).includes(color)) ? 
    colors[color] : colors[DEFAULT_COLOR];

  const iconStringIsValid = () => 
    icon !== "none" && 
    Object.keys(iconStrings).includes(icon) &&
    icon !== undefined &&
    icon !== null;

  const getIcon = () => {
    const iconString = iconStrings[icon];

    return (
      <Icon 
        color={getColorIfValid()}
        name={iconString}
        size={ICON_SIZE}
        style={styles.personDetailIcon}
      />
    );
  }

  return (
    <View style={styles.personDetailWrapper}>
      { iconStringIsValid() && getIcon() }
      <Text style={{...styles.text, ...styles.personDetailText}}>
        {value}
      </Text>
    </View>
  )
};

export default PersonDetail;

