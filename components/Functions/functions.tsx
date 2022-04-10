import React, { useContext } from "react";
import { Context } from "../../context/AppContext";
import styles from "../../styles/Home.module.scss";

export const FunctionDarkModeToggle = () => {
  const { darkMode } = useContext(Context);
  if (darkMode == false) {
    return styles.toggleLight;
  } else {
    return styles.toggleDark;
  }
};

export const FunctionDarkModeHeader = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.appHeaderLight;
  } else {
    return styles.appHeaderDark;
  }
};

export const FunctionDarkModeBodyDiv = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.bodyDivLight;
  } else {
    return styles.bodyDivDark;
  }
};
export const FunctionDarkModeBodyText = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.bodyTextLight;
  } else {
    return styles.bodyTextDark;
  }
};
export const FunctionDarkModeBodySubtText = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.bodyTextSubtLight;
  } else {
    return styles.bodyTextSubtDark;
  }
};
export const FunctionDarkModeWebVersion = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.WebVersionLight;
  } else {
    return styles.bodyTextWebVersionDark;
  }
};
export const FunctionDarkModeBodyDownload = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.bodyTextWebVersionLight;
  } else {
    return styles.bodyTextWebVersionDark;
  }
};
export const FunctionH1DarkMode = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return "Light";
  } else {
    return "Dark";
  }
};
export const FunctionH1DarkModeClass = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.h1LightMode;
  } else {
    return styles.h1DarkMode;
  }
};
export const FunctionDarkModeFooter = () => {
  const { darkMode } = useContext<DarkModeInterface>(Context);
  if (darkMode == false) {
    return styles.footerLight;
  } else {
    return styles.footerDark;
  }
};
