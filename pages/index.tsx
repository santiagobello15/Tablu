import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import iphone from "./media/iphone-front-transparent.png";
import iosBadge from "./media/badge-ios.svg";
import androidBadge from "./media/badge-android.svg";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const functionDarkModeToggle = () => {
    if (darkMode == false) {
      return styles.toggleLight;
    } else {
      return styles.toggleDark;
    }
  };
  const functionDarkModeHeader = () => {
    if (darkMode == false) {
      return styles.appHeaderLight;
    } else {
      return styles.appHeaderDark;
    }
  };
  const functionDarkModeBodyDiv = () => {
    if (darkMode == false) {
      return styles.bodyDivLight;
    } else {
      return styles.bodyDivDark;
    }
  };
  const functionDarkModeBodyText = () => {
    if (darkMode == false) {
      return styles.bodyTextLight;
    } else {
      return styles.bodyTextDark;
    }
  };
  const functionDarkModeBodySubtText = () => {
    if (darkMode == false) {
      return styles.bodyTextSubtLight;
    } else {
      return styles.bodyTextSubtDark;
    }
  };
  const functionDarkModeBodyDownload = () => {
    if (darkMode == false) {
      return styles.bodyTextDownloadLight;
    } else {
      return styles.bodyTextDownloadDark;
    }
  };

  const changeDarkMode = () => {
    if (darkMode == false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    console.log(darkMode);
  };
  return (
    <div className="App">
      <div className={functionDarkModeHeader()}>
        <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>
        <div className={styles.toggleButton}>
          <div
            className={functionDarkModeToggle()}
            onClick={changeDarkMode}
          ></div>
        </div>
      </div>
      <div className={functionDarkModeBodyDiv()}>
        <div className={styles.iphoneContainer}>
          <Image className={styles.iphonePic} src={iphone}></Image>
        </div>
        <div className={styles.bodyTextContainer}>
          <div className={styles.bodyTextFirstRow}>
            <h2 className={functionDarkModeBodyText()}>JUGÁ </h2>
            <h2 className={styles.bodyTextTablu}>TABLÚ FAMOSOS </h2>
          </div>

          <div className={styles.bodyTextSecondRow}>
            <h2 className={functionDarkModeBodySubtText()}>
              Divertite con amigos
            </h2>
          </div>
          <div className={styles.bodyTextThirdRow}>
            <p className={functionDarkModeBodyDownload()}>
              Descargá la app en tu smartphone
            </p>
          </div>
          <div className={styles.bodyTextFourthRow}>
            <div className={styles.absDivIos}>
              <div className={styles.buttonsStores} />
              <Image layout="fill" alt="iosbadge" src={iosBadge}></Image>
            </div>

            <div className={styles.absDivAndroid}>
              <div className={styles.buttonsStores} />
              <Image
                layout="fill"
                alt="androidbadge"
                src={androidBadge}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
