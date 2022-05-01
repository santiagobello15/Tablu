import React, { useContext, useState } from "react";
import styles from "./startModal.module.scss";
import { Context } from "../../context/AppContext";

function StartModal({ GetOpacityfromStart, CloseStartModal }: any) {
  const {
    teamOneColor,
    setTeamOneColor,
    teamTwoColor,
    setTeamTwoColor,
    setTeamOneName,
    setTeamTwoName,
  } = useContext<any>(Context);
  const [exitModalActive, setExitModalActive] = useState(false);
  const CloseStModal = () => {
    setExitModalActive(true);
    setTimeout(() => CloseStartModal(false), 250);
  };
  const PlayBtn = () => {
    CloseStartModal(false);
    SendOpacitytoGame();
  };

  const SendOpacitytoGame = () => {
    GetOpacityfromStart(0);
  };

  const pickedRed1 = () => {
    setTeamOneColor("Red");
  };
  const pickedBlue1 = () => {
    setTeamOneColor("Blue");
  };
  const pickedGreen1 = () => {
    setTeamOneColor("Green");
  };
  const pickedYellow1 = () => {
    setTeamOneColor("Yellow");
  };
  const pickedRed2 = () => {
    setTeamTwoColor("Red");
  };
  const pickedBlue2 = () => {
    setTeamTwoColor("Blue");
  };
  const pickedGreen2 = () => {
    setTeamTwoColor("Green");
  };
  const pickedYellow2 = () => {
    setTeamTwoColor("Yellow");
  };

  const picked1stRowFunction = () => {
    if (teamOneColor == "Red") {
      return styles.firstRowRed;
    }
    if (teamOneColor == "Green") {
      return styles.firstRowGreen;
    }
    if (teamOneColor == "Blue") {
      return styles.firstRowBlue;
    } else {
      return styles.firstRowYellow;
    }
  };
  const picked2ndRowFunction = () => {
    if (teamTwoColor == "Red") {
      return styles.secondRowRed;
    }
    if (teamTwoColor == "Green") {
      return styles.secondRowGreen;
    }
    if (teamTwoColor == "Blue") {
      return styles.secondRowBlue;
    } else {
      return styles.secondRowYellow;
    }
  };

  return (
    <div className={styles.overlayModal}>
      <div
        className={
          exitModalActive ? styles.modalContainerOut : styles.modalContainer
        }
      >
        <h1>Comenzar</h1>
        <ul className={styles.configUl}>
          <li className={picked1stRowFunction()}>
            <input
              maxLength={15}
              placeholder="Equipo 1..."
              id={styles.inputID}
              onChange={(evt) => {
                setTeamOneName(evt.target.value);
              }}
            />
            <div className={styles.colorsDiv}>
              <div className={styles.colorRed} onClick={pickedRed1}></div>
              <div className={styles.colorBlue} onClick={pickedBlue1}></div>
              <div className={styles.colorGreen} onClick={pickedGreen1}></div>
              <div className={styles.colorYellow} onClick={pickedYellow1}></div>
            </div>
          </li>
          <li className={picked2ndRowFunction()}>
            <input
              id={styles.inputID}
              maxLength={15}
              placeholder="Equipo 2..."
              onChange={(evt) => {
                setTeamTwoName(evt.target.value);
              }}
            />
            <div className={styles.colorsDiv}>
              <div className={styles.colorRed} onClick={pickedRed2}></div>
              <div className={styles.colorBlue} onClick={pickedBlue2}></div>
              <div className={styles.colorGreen} onClick={pickedGreen2}></div>
              <div className={styles.colorYellow} onClick={pickedYellow2}></div>
            </div>
          </li>
        </ul>
        <div className={styles.playContainer}>
          <h2 className={styles.play} onClick={PlayBtn}>
            Jugar Online
          </h2>
        </div>
        <div className={styles.closeBtn} onClick={CloseStModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default StartModal;
