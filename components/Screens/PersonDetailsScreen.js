import React from 'react';

import { View, Text } from 'react-native';

import useStyles from '../../hooks/useStyles';

const PersonDetailsScreen = ({ children, person }) => {
  const { styles } = useStyles();

  return (
    <View>
      <Text>I'm the PersonDetailsScreen!</Text>
    </View>
  );
};

export default PersonDetailsScreen;