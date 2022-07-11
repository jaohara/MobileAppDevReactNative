import React from 'react';

import { ScrollView, View } from 'react-native';

import Header from './Header';

import useStyles from '../hooks/useStyles';


const Screen = ({ children, isScrollView = true, title }) => {
  const { styles } = useStyles();

  const renderView = () => {
    const viewChildren = React.Children.map(children, (child) => 
      React.cloneElement(child, { style: styles.screenText }));

    const viewStyle = {...styles.backgroundStyle, ...styles.screen};

    return (
      isScrollView ? (
        <ScrollView
          children={viewChildren}
          contentInsetAdjustmentBehavior='automatic'
          style={viewStyle}
        />
      ) : (
        <View
          children={viewChildren}
          style={viewStyle}
        />
      )
    )
  }

  return (
    <>
      {
      // <Header>{ title }</Header>
        renderView()
      }
    </>
  );
}

export default Screen;