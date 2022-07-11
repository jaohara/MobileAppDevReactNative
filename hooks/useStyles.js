import React, { useContext } from "react";

import { AppContext } from "../App";
import { getStyles } from "../styles/styles";

const useStyles = () => {
  const { isDarkMode } = useContext(AppContext);
  const styles = getStyles(isDarkMode);

  return ({
    isDarkMode: isDarkMode,
    styles: styles,
  });
};


export default useStyles;