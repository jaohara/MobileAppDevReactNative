import React from 'react';

import { ScrollView } from 'react-native';

import Header from './Header';

import { styles } from '../styles/styles';

const Screen = ({ children, title }) => {
  // ScrollView props were just copied from boilerplate RN example
  return (
    <>
      <Header>{ title }</Header>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.backgroundStyle}>
        {
          React.Children.map(children, (child) => 
            React.cloneElement(child, {
              style: styles.screenText
            })
          )
        }
      </ScrollView>
    </>
  );
}

export default Screen;