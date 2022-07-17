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
      color: colors.blue,
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
      flex: 1,
      flexDirection: "row",
      padding: 12,
      marginBottom: 16,
    },
    nameText: {
      // color: colors.blue,
      fontWeight: "bold",
      fontSize: 16,
    },
    navWrapper: {
      flexDirection: "row",
    },
    personDetailIcon: {
      marginRight:8,
    },
    personDetailImage: {
      flex: 1,
      height: 200,
      resizeMode: "cover",
      width: null,
      borderRadius: 8,
    },
    personDetailName: {
      // color: colors.blue,
      fontWeight: "bold",
      fontSize: 32,
    },
    personDetailText: {
      fontSize: 16,
    },
    personDetailWrapper: {
      flex: 1,
      flexDirection: "row",
      marginBottom: 2,
      marginTop: 2,
    }, 
    personListItemImage:{
      borderRadius: 8,
      height: 64,
      resizeMode: "cover",
      width: 64,
    },
    personListItemTextWrapper: {
      flex: 1,
      marginLeft: 12,
      justifyContent: "center",
    },
    screen: {
      ...adaptiveDarkModeColors,
      flex: 1,
      minHeight: 100,
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