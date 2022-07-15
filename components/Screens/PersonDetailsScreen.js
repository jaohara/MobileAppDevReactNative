import React, { useContext } from 'react';

import { View, Text } from 'react-native';
import PersonDetail from '../PersonDetail';

import { colors } from '../../styles/styles';
import useStyles from '../../hooks/useStyles';

import { AppContext } from '../../App';

const PersonDetailsScreen = ({ children, person }) => {
  const { styles } = useStyles();
  const { currentPerson } = useContext(AppContext);

  return (
    <View>
      <Text>{currentPerson.firstname} {currentPerson.lastname}</Text>
    </View>
  );
};

export default PersonDetailsScreen;