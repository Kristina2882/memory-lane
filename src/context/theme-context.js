import React from "react";

export const themes= {
    light: {
      backgroundColor: "AntiqueWhite",
      textColor: "#192231",
      buttonBackground: "#98878F", 
      inputBackground: "#ded1c1"
    },
    dark: {
      backgroundColor: "#494E6B",
      textColor: "AntiqueWhite", 
      buttonBackground: "#192231",
      inputBackground: "#98878F"
    }
  };

  export const ThemeContext = React.createContext(themes.dark);