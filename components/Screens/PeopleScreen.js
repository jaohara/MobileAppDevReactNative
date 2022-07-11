import React, { useContext, useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';

import Screen from '../Screen';
import PersonListItem from '../PersonListItem';

import { AppContext } from '../../App';

import useStyles from '../../hooks/useStyles';

const PeopleScreen = ({ children }) => {
  const { styles } = useStyles();
  const { peopleApiRoute } = useContext(AppContext);

  const [ people, setPeople ] = useState([]);

  const renderListItem = (item) => (<PersonListItem person={item} />);

  useEffect(() => {
    // call fetch on peopleApiRoute
    fetch(peopleApiRoute)
      .then(res => res.json())
      .then(json => setPeople(json.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Screen isScrollView={false}>
      <FlatList
        data={people}
        renderItem={({item}) => renderListItem(item)}
      />
    </Screen>
  );
};

export default PeopleScreen;