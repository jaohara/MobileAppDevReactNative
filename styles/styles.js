// import { StyleSheet, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";

/*
  I need a way to get this globally, but it can only be called 
  within the context of a functional component. This seems like
  the kind of thing that I shouldn't waste my time on for this 
  assignment, but should look into for future projects.
*/
// export const isDarkMode = useColorScheme() === 'dark';
export const isDarkMode = 'dark';

const colors = {
  blue: "#61AFEF",
  darkGray: "#282c34",
  darkGrayLight: "#2c313c",
  green: "#98C379",
  lightGray: "#dcdfe4",
  orange: "#E5C07B",
  purple: "#C678DD",
  red: "#E06C75",
  teal: "#56B6C2",
  white: "efefef",
}

export const statusBarBgColor = isDarkMode ? colors.darkGray : colors.lightGray;

const adaptiveDarkModeColors = {
  backgroundColor: isDarkMode ? colors.darkGray : colors.lightGray,
  color: isDarkMode ? colors.lightGray : colors.darkGray,
};

export const styles = StyleSheet.create({
  backgroundStyle: {
    ...adaptiveDarkModeColors,
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    color: adaptiveDarkModeColors.color,
    fontSize: 24,
    fontWeight: '700',
    padding: 16,
    textAlign: "center",
    boxShadowColor: colors.darkGray,
  },
  listItem: {
    backgroundColor: isDarkMode ? colors.darkGrayLight : colors.white,
    borderRadius: 8,
    color: adaptiveDarkModeColors.color,
    padding: 12,
    marginBottom: 16,
  },
  screen: {
    ...adaptiveDarkModeColors,
    // hack to prevent navBar from blocking part of content
    paddingBottom: 24,
  },
  screenText: {
    ...adaptiveDarkModeColors,
    padding: 16,
  }
});