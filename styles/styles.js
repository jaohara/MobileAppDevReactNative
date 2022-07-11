import { StyleSheet } from "react-native";

export const colors = {
  blue: "#61AFEF",
  darkGray: "#282c34",
  darkGrayLight: "#2c313c",
  green: "#98C379",
  lightGray: "#dcdfe4",
  orange: "#E5C07B",
  purple: "#C678DD",
  red: "#E06C75",
  teal: "#56B6C2",
  white: "#efefef",
}

export const getStatusBarColor = (isDarkMode) => isDarkMode ? 
  colors.darkGray : colors.white;

export const getStyles = (isDarkMode) => {
  const adaptiveDarkModeColors = {
    backgroundColor: isDarkMode ? colors.darkGray : colors.white,
    color: isDarkMode ? colors.lightGray : colors.darkGray,
  };

  return StyleSheet.create({
    backgroundStyle: {
      ...adaptiveDarkModeColors,
    },
    buttons: {
      borderRadius: 8,
      color: colors.green,
      margin: 8,
    },
    buttonWrapper: {
      // height: 48,
      width: 64,
      padding: 8
    },
    container: {
      flex: 1,
    },
    highlight: {
      fontWeight: '700',
    },
    header: {
      color: adaptiveDarkModeColors.color,
      fontSize: 24,
      fontWeight: '700',
      padding: 16,
      paddingLeft: 24,
      paddingRight: 24,
      // textAlign: "center",
      boxShadowColor: colors.darkGray,
    },
    listItem: {
      ...adaptiveDarkModeColors,
      backgroundColor: isDarkMode ? colors.darkGrayLight : colors.lightGray,
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
    },
    navWrapper: {
      flexDirection: "row",
    },
    screen: {
      ...adaptiveDarkModeColors,
      flex: 1,
      // hack to prevent navBar from blocking part of content
      paddingBottom: 24,
    },
    screenText: {
      ...adaptiveDarkModeColors,
      padding: 16,
    }, 
    text: {
      color: adaptiveDarkModeColors.color,
    }
  });
}