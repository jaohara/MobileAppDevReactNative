import React, { useContext } from 'react';

import { ScrollView, View } from 'react-native';

import Header from './Header';

import { DarkModeContext } from '../App';
import { getStyles } from '../styles/styles';


const Screen = ({ children, isScrollView = true, title }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const styles = getStyles(isDarkMode);

  const renderView = () => {
    const viewChildren = React.Children.map(children, (child) => 
      React.cloneElement(child, { style: styles.screenText }));

    return (
      isScrollView ? (
        <ScrollView
          children={viewChildren}
          contentInsetAdjustmentBehavior='automatic'
          style={styles.backgroundStyle}
        />
      ) : (
        <View
          children={viewChildren}
          style={styles.backgroundStyle}
        />
      )
    )
  }

  return (
    <>
      <Header>{ title }</Header>
      {
        renderView()
      }
      {/* <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.backgroundStyle}>
        {
          React.Children.map(children, (child) => 
            React.cloneElement(child, {
              style: styles.screenText
            })
          )
        }
      </ScrollView> */}
    </>
  );
}

export default Screen;