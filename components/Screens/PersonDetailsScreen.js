import React, { useContext, useEffect} from 'react';

import { View } from 'react-native';
import Screen from '../Screen';
import PersonDetail from '../PersonDetail';

import { AppContext } from '../../App';

const PersonDetailsScreen = ({ navigation }) => {
  const { 
    currentPerson: person,
    currentPersonIndex,
    peopleImages, 
  } = useContext(AppContext);

  const image = peopleImages[currentPersonIndex];
  // navigation.setOptions({ headerTitle: `${person.firstname} ${person.lastname}` });

  // TODO: Remove debug logging
  // useEffect(() => {
  //   console.log("person:");
  //   console.log(person);
  //   console.log("currentPersonIndex:");
  //   console.log(currentPersonIndex);
  //   console.log("image:");
  //   console.log(image);
  //   console.log(typeof image)
  // }, []);


  return (
    <Screen>
      <View>
        { image }
      </View>

      <View>
        <PersonDetail icon='email' value={person.email} />
        <PersonDetail icon='username' value={person.username} />
        <PersonDetail icon='website' value={person.website} />
      </View>
    </Screen>
  );
};

export default PersonDetailsScreen;