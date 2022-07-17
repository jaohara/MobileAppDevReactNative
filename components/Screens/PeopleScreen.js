import React, { useContext, useEffect, useState } from 'react';

import { View, Text, FlatList, Image, Button } from 'react-native';

import Screen from '../Screen';
import PersonListItem from '../PersonListItem';

import useStyles from '../../hooks/useStyles';

import { AppContext } from '../../App';

const IMAGE_COUNT = 10;

const PeopleScreen = ({ navigation, children }) => {
  const {
    currentPerson,
    imageRoute,
    people,
    peopleImages,
    peopleImagesLoaded,
    peopleLoaded,
    peopleApiRoute, 
    setCurrentPerson,
    setCurrentPersonIndex,
    setCurrentPersonTitle,
    setPeople,
    setPeopleImages,
    setPeopleImagesLoaded, 
    setPeopleLoaded, 
  } = useContext(AppContext);
  const { styles } = useStyles()

  const renderListItem = (item, index) => 
    (<PersonListItem
      navigation={navigation}
      index={index}
      person={item}
      setCurrentPerson={setCurrentPerson}
      setCurrentPersonIndex={setCurrentPersonIndex}
      setCurrentPersonTitle={setCurrentPersonTitle}
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

  const fetchImages = () => {
    // this is cheating a little bit, but the routes are constant and I 
    // want to cut down on image loading time.
    !peopleImagesLoaded && setPeopleImages([...Array(IMAGE_COUNT)].map((item, index) => (
      <Image
        source={{uri: `${imageRoute}/${index}`}}
        style={styles.personDetailImage}
      />
    )));
    setPeopleImagesLoaded(true);
  }

  useEffect(() => {
    fetchPeople();
    fetchImages();
  }, []);

  useEffect(() => {
    console.log("currentPerson: ");
    console.log(currentPerson);
  }, [currentPerson])

  return (
    <Screen isScrollView={false}>
      {/* <Button
        onPress={() => console.log(peopleImages)}
        title="Log Image Array"
      /> */}
      <FlatList
        data={people}
        renderItem={({item, index}) => renderListItem(item, index)}
      />
    </Screen>
  );
};

export default PeopleScreen;