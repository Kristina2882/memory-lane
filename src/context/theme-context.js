import React from "react";

export const themes= {
    light: {
      backgroundColor: "AntiqueWhite",
      textColor: "DarkSlateGrey",
      buttonBackground: "Lavender", 
      inputBackground: "Gainsboro"
    },
    dark: {
      backgroundColor: "#494E6B",
      textColor: "#98878F",
      buttonBackground: "#192231",
      inputBackground: "#45516d"
    }
  };

  export const ThemeContext = React.createContext(themes.dark);