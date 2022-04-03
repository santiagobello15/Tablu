import React, { useState } from "react";
import styles from "./startModal.module.scss";

function StartModal({
  GetColorsFromStartTeamOne,
  GetColorsFromStartTeamTwo,
  GetNameFromStartTeamOne,
  GetNameFromStartTeamTwo,
  GetOpacityfromStart,
  CloseStartModal,
}: any) {
  const [pickedColor1stRow, setPickedColor1stRow] = useState("Red");
  const [pickedColor2ndRow, setPickedColor2ndRow] = useState("Blue");
  const [teamOneName, setTeamOneName] = useState("Equipo 1");
  const [teamTwoName, setTeamTwoName] = useState("Equipo 2");
  const CloseStModal = () => {
    SendColorTeamOnetoGame();
    SendColorTeamTwotoGame();
    SendNameTeamOnetoGame();
    SendNameTeamTwotoGame();
    CloseStartModal(false);
  };
  const PlayBtn = () => {
    SendColorTeamOnetoGame();
    SendColorTeamTwotoGame();
    SendNameTeamOnetoGame();
    SendNameTeamTwotoGame();
    SendOpacitytoGame();
    CloseStartModal(false);
  };

  const SendColorTeamOnetoGame = () => {
    GetColorsFromStartTeamOne(pickedColor1stRow);
  };
  const SendColorTeamTwotoGame = () => {
    GetColorsFromStartTeamTwo(pickedColor2ndRow);
  };
  const SendNameTeamOnetoGame = () => {
    GetNameFromStartTeamOne(teamOneName);
  };
  const SendNameTeamTwotoGame = () => {
    GetNameFromStartTeamTwo(teamTwoName);
  };
  const SendOpacitytoGame = () => {
    GetOpacityfromStart(0);
  };

  const pickedRed1 = () => {
    setPickedColor1stRow("Red");
  };
  const pickedBlue1 = () => {
    setPickedColor1stRow("Blue");
  };
  const pickedGreen1 = () => {
    setPickedColor1stRow("Green");
  };
  const pickedYellow1 = () => {
    setPickedColor1stRow("Yellow");
  };
  const pickedRed2 = () => {
    setPickedColor2ndRow("Red");
  };
  const pickedBlue2 = () => {
    setPickedColor2ndRow("Blue");
  };
  const pickedGreen2 = () => {
    setPickedColor2ndRow("Green");
  };
  const pickedYellow2 = () => {
    setPickedColor2ndRow("Yellow");
  };

  const picked1stRowFunction = () => {
    if (pickedColor1stRow == "Red") {
      return styles.firstRowRed;
    }
    if (pickedColor1stRow == "Green") {
      return styles.firstRowGreen;
    }
    if (pickedColor1stRow == "Blue") {
      return styles.firstRowBlue;
    } else {
      return styles.firstRowYellow;
    }
  };
  const picked2ndRowFunction = () => {
    if (pickedColor2ndRow == "Red") {
      return styles.secondRowRed;
    }
    if (pickedColor2ndRow == "Green") {
      return styles.secondRowGreen;
    }
    if (pickedColor2ndRow == "Blue") {
      return styles.secondRowBlue;
    } else {
      return styles.secondRowYellow;
    }
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.modalContainer}>
        <h1>Comenzar</h1>
        <ul className={styles.configUl}>
          <li className={picked1stRowFunction()}>
            <input
              placeholder="Equipo 1..."
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
