import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useContext } from "react";
import iphone from "../media/iphone-front-transparent.png";
import iosBadge from "../media/badge-ios.svg";
import androidBadge from "../media/badge-android.svg";
import linkedBadge from "../media/badge-linked.svg";
import { AspectRatio } from "@chakra-ui/layout";
import { Context } from "../context/AppContext";
import {
  FunctionDarkModeToggle,
  FunctionH1DarkMode,
  FunctionH1DarkModeClass,
  FunctionDarkModeFooter,
  FunctionDarkModeHeader,
  FunctionDarkModeBodyDiv,
  FunctionDarkModeBodyText,
  FunctionDarkModeBodySubtText,
  FunctionDarkModeBodyDownload,
} from "../components/Functions/functions";

const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const API_URL =
  ENVIRONMENT === "local"
    ? "http://localhost:3000/"
    : "https://tablu.vercel.app/";

const Home: NextPage = () => {
  const { darkMode, setDarkMode } = useContext(Context);
  const [comSoonAlert, setComSoonAlert] = useState(false);
  const changeDarkMode = () => {
    if (darkMode == false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  const commingSoon = () => {
    setComSoonAlert(true);
  };

  const commSoonAlert = () => {
    if (comSoonAlert == true) {
      setTimeout(() => setComSoonAlert(false), 2500);
      return (
        <div className={styles.comSoon}>
          <p>¡Muy pronto!</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {commSoonAlert()}
      <div className={FunctionDarkModeHeader()}>
        <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>
        <div onClick={changeDarkMode} className={styles.toggleButton}>
          <div
            className={FunctionDarkModeToggle()}
            onClick={changeDarkMode}
          ></div>
          <h1 className={FunctionH1DarkModeClass()}>{FunctionH1DarkMode()}</h1>
        </div>
      </div>
      <div className={FunctionDarkModeBodyDiv()}>
        <div className={styles.mainContainer}>
          <div className={styles.iphoneContainer}>
            <Image
              alt="iphonepic"
              className={styles.iphonePic}
              src={iphone}
            ></Image>
          </div>
          <div className={styles.bodyTextContainer}>
            <div className={styles.bodyTextFirstRow}>
              <h2 className={FunctionDarkModeBodyText()}>JUGÁ </h2>
              <h2 className={styles.bodyTextTablu}>TABLÚ FAMOSOS </h2>
            </div>

            <div className={styles.bodyTextSecondRow}>
              <h2 className={FunctionDarkModeBodySubtText()}>
                Divertite con amigos
              </h2>
            </div>
            <div className={styles.bodyTextThirdRow}>
              <p className={FunctionDarkModeBodyDownload()}>
                Descargá la app en tu smartphone
              </p>
            </div>
            <div className={styles.bodyTextFourthRow}>
              <div
                className={styles.absDivIos}
                onClick={() => {
                  commingSoon();
                }}
              >
                <div className={styles.buttonsStores} />
                <Image layout="fill" alt="iosbadge" src={iosBadge}></Image>
              </div>
              <div
                className={styles.absDivAndroid}
                onClick={() => {
                  commingSoon();
                }}
              >
                <div className={styles.buttonsStores} />
                <Image
                  layout="fill"
                  alt="androidbadge"
                  src={androidBadge}
                ></Image>
              </div>
            </div>
          </div>
          <div className={styles.bodyTextFifth}>
            <h1 className={FunctionDarkModeBodyDownload()}>
              Ó usá la versión web
            </h1>
            <Link href="/game">
              <h1 className={styles.onlineVersion}>Jugar Online</h1>
            </Link>
          </div>
        </div>
        <div className={FunctionDarkModeFooter()}>
          <div className={styles.footerComment}>
            <p>
              Tablu Famosos fue desarrollado para divertir al usuario, sin
              intención de ofender a ninguna persona.
            </p>
            <p>
              Repotar cualquier situación considerada ofensiva a info@tablu.io.
            </p>
          </div>
          <div className={styles.footerMadeBy}>
            <p>Desarrollado por Santiago Bello</p>
            <div
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/bellosantiagoariel/";
              }}
            >
              <Image layout="fill" alt="linkedbadge" src={linkedBadge}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gameplay}>
        <p>Gameplay</p>
      </div>
      <div className={styles.videoIndex}>
        <AspectRatio className={styles.videoframe} maxW="520px" ratio={9 / 6}>
          <iframe
            className={styles.videonoframes}
            title="video"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default Home;
