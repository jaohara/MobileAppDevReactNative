import React, { useContext, useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';

import Screen from '../Screen';
import PersonListItem from '../PersonListItem';

import { AppContext } from '../../App';

const PeopleScreen = ({ navigation, children }) => {
  const {
    currentPerson,
    people,
    peopleLoaded,
    peopleApiRoute, 
    setCurrentPerson,
    setPeople, 
    setPeopleLoaded, 
  } = useContext(AppContext);

  const renderListItem = (item) => 
    (<PersonListItem
      navigation={navigation}
      person={item} 
      setCurrentPerson={setCurrentPerson}
    />);

  const fetchPeople = () => {
    !peopleLoaded && fetch(peopleApiRoute)
      .then(res => res.json())
      .then(json => {
        setPeople(json.data)
        setPeopleLoaded(true);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  useEffect(() => {
    console.log("currentPerson: ");
    console.log(currentPerson);
  }, [currentPerson])

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