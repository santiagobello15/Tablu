import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useContext } from "react";
import iphone from "../media/phone1.png";
import iphoneMarcas from "../media/phone2.png";
import iosBadge from "../media/badge-ios.svg";
import androidBadge from "../media/badge-android.svg";
import linkedBadge from "../media/badge-linked.svg";
import Head from "next/head";
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
  FunctionMiddleContainer,
} from "../componentsFamosos/Functions/functions";

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
      <Head>
        <title>Tablu Games</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Jugá el nuevo clásico juego de adivinar palabras, nuevas versiones. Probala online, o bajate la App"
        ></meta>
        <link
          rel="preload"
          href="/fonts/luckiestguyregular-webfont.ttf"
          as="font"
          crossOrigin=""
        ></link>
      </Head>
      <div className={FunctionMiddleContainer()}></div>
      {commSoonAlert()}
      <div className={FunctionDarkModeHeader()}>
        <h1 className={styles.headerTitle}>TABLÚ GAMES</h1>

        <div onClick={changeDarkMode} className={styles.toggleButton}>
          <div
            className={FunctionDarkModeToggle()}
            onClick={changeDarkMode}
          ></div>
          <p className={FunctionH1DarkModeClass()}>{FunctionH1DarkMode()}</p>
        </div>
      </div>
      <div className={FunctionDarkModeBodyDiv()}>
        <div
          className={styles.iphoneContainer}
          id={styles.iphoneContainerRightId}
        >
          <Image
            alt="iphone picture"
            className={styles.iphonePic}
            src={iphoneMarcas}
          ></Image>
        </div>
        <div className={styles.mainContainerLeft}>
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
                  window.open(
                    "https://play.google.com/store/apps/details?id=tablugames.famosos",
                    "_blank"
                  );
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
            <div className={styles.bodyTextFifth}>
              <h1 className={FunctionDarkModeBodyDownload()}>
                Ó usá la versión web
              </h1>
              <Link href="/famosos">
                <h1 className={styles.onlineVersion}>Jugar Online</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.iphoneContainer}>
          <Image
            alt="iphone picture"
            className={styles.iphonePic}
            src={iphone}
          ></Image>
        </div>
        <div
          className={styles.mainContainerRight}
          id={styles.mainContainerRightID}
        >
          <div className={styles.bodyTextContainer}>
            <div className={styles.bodyTextFirstRow}>
              <h2 className={FunctionDarkModeBodyText()}>JUGÁ </h2>
              <h2
                className={styles.bodyTextTablu}
                id={styles.bodyTextTabluRight}
              >
                TABLÚ MARCAS{" "}
              </h2>
            </div>

            <div className={styles.bodyTextSecondRow}>
              <h2 className={FunctionDarkModeBodySubtText()}>Probá lo nuevo</h2>
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
                  window.open(
                    "https://play.google.com/store/apps/details?id=tablugames.marcas",
                    "_blank"
                  );
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
            <div className={styles.bodyTextFifth}>
              <h1 className={FunctionDarkModeBodyDownload()}>
                Ó usá la versión web
              </h1>
              <Link href="/marcas">
                <h1
                  className={styles.onlineVersion}
                  id={styles.onlineVersionRight}
                >
                  Jugar Online
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={FunctionDarkModeFooter()}>
        <div className={styles.footerComment}>
          <p>
            Tablu Games fue desarrollado para divertir al usuario, sin intención
            de ofender a ninguna persona. Repotar cualquier situación
            considerada ofensiva inmediatamente a tablugames@gmail.com.
          </p>
        </div>
        <div className={styles.footerMadeBy}>
          <p>Desarrollado por Santiago Bello</p>
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/bellosantiagoariel/",
                "_blank"
              );
            }}
          >
            <Image layout="fill" alt="linkedin badge" src={linkedBadge}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
