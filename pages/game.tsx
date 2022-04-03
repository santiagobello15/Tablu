import type { NextPage } from "next";
import styles from "../styles/game.module.scss";
import SettingsModal from "./components/settingsModal";
import RulesModal from "./components/rulesModal";
import StartModal from "./components/startModal";
import React, { useState, useEffect } from "react";

const Game: NextPage = () => {
  const [showsettingsModal, setShowSettingsModal] = useState(false);
  const [showrulesModal, setShowRulesModal] = useState(false);
  const [showstartModal, setShowStartModal] = useState(false);
  const [timeRound, setTimeRound] = useState(60);
  const [clickedMuletillas, setClickedMuletillas] = useState(false);
  const [clickedInsultos, setClickedInsultos] = useState(false);
  const [quantityRound, setQuantityRound] = useState(15);
  const [teamOneColor, setTeamOneColor] = useState("Red");
  const [teamTwoColor, setTeamTwoColor] = useState("Blue");
  const [teamOneName, setTeamOneName] = useState("Team 1");
  const [teamTwoName, setTeamTwoName] = useState("Team 1");
  const [centerDivOpacity, setCenterDivOpacity] = useState(1);
  const [countDownGame, setCountDownGame] = useState(timeRound);
  const [startCounter, setStartCounter] = useState(false);

  const rendersettingsModal = () => {
    if (showsettingsModal == true) {
      return (
        <SettingsModal
          CloseSettingsModal={setShowSettingsModal}
          GetTimeFromSettings={setTimeRound}
          GetRoundsFromSettings={setQuantityRound}
          GetMuletillasFromSettings={setClickedMuletillas}
          GetInsultosFromSettings={setClickedInsultos}
        />
      );
    }
  };
  const renderrulesModal = () => {
    if (showrulesModal == true) {
      return <RulesModal CloseRulesModal={setShowRulesModal} />;
    }
  };
  const renderstartModal = () => {
    if (showstartModal == true) {
      return (
        <StartModal
          GetColorsFromStartTeamOne={setTeamOneColor}
          GetColorsFromStartTeamTwo={setTeamTwoColor}
          GetNameFromStartTeamOne={setTeamOneName}
          GetNameFromStartTeamTwo={setTeamTwoName}
          CloseStartModal={setShowStartModal}
          GetOpacityfromStart={setCenterDivOpacity}
        />
      );
    }
  };
  const settModalShow = () => {
    setShowSettingsModal(true);
  };
  const rulesModalShow = () => {
    setShowRulesModal(true);
  };
  const startModalShow = () => {
    setShowStartModal(true);
  };

  const muletillaFunction = () => {
    if (clickedMuletillas == false) {
      return "Sin penalización por muletillas";
    } else {
      return "Penalización por muletillas";
    }
  };
  const insultosFunction = () => {
    if (clickedInsultos == false) {
      return "Sin penalización por insultos";
    } else {
      return "Penalización por insultos";
    }
  };

  const CenterDivFunction = () => {
    if (centerDivOpacity == 1) {
      return (
        <div className={styles.centerDiv}>
          <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>

          <div className={styles.btnsContainer}>
            <div className={styles.configButton} onClick={settModalShow}>
              <p>Configuración</p>
            </div>
            <div className={styles.rulesButton} onClick={rulesModalShow}>
              <p>Reglas</p>
            </div>
            <div className={styles.startButton} onClick={startModalShow}>
              <p>Comenzar</p>
            </div>
          </div>
          <div className={styles.timerView}>
            <a>Tiempo</a>
            <p>
              {timeRound}
              {'"'}
            </p>
          </div>
          <div className={styles.roundsView}>
            <a>Rondas</a>
            <p>{quantityRound}</p>
          </div>
          <div className={styles.muletillaView}>
            <a>Modificador #1</a>
            <p>{muletillaFunction()}</p>
          </div>
          <div className={styles.insultosView}>
            <a>Modificador #2</a>
            <p>{insultosFunction()}</p>
          </div>
        </div>
      );
    }
  };

  /*   const CounterFunction = () => {
    for (let i = timeRound; i > 0; i--) {
      console.log(i);
      setTimeout(CounterFunction(), 1000);
    }
  };
 */
  const TeamOneCardColor = () => {
    if (teamOneColor == "Red") {
      return styles.cardRedTeamOne;
    }
    if (teamOneColor == "Blue") {
      return styles.cardBlueTeamOne;
    }
    if (teamOneColor == "Green") {
      return styles.cardGreenTeamOne;
    }
    return styles.cardYellowTeamOne;
  };
  const TeamTwoCardColor = () => {
    if (teamTwoColor == "Red") {
      return styles.cardRedTeamTwo;
    }
    if (teamTwoColor == "Blue") {
      return styles.cardBlueTeamTwo;
    }
    if (teamTwoColor == "Green") {
      return styles.cardGreenTeamTwo;
    }
    return styles.cardYellowTeamTwo;
  };

  function CounterFunction() {
    setStartCounter(true);
  }

  useEffect(() => {
    if (startCounter == true) {
      countDownGame > 0 &&
        setTimeout(() => setCountDownGame(countDownGame - 1), 1000);
    }
  });

  const PlayingDiv = () => {
    if (centerDivOpacity == 0) {
      return (
        <div className={styles.centerDiv}>
          <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>
          <div className={styles.startRoundBtn} onClick={CounterFunction}>
            <p>Iniciar</p>
          </div>
          <div className={styles.startRound}>
            <p>{countDownGame}</p>
          </div>
          <div className={styles.gameCounter}>
            <div className={TeamOneCardColor()}>
              <p>{teamOneName}</p>
            </div>
            <div className={TeamTwoCardColor()}>
              <p>{teamTwoName}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.mainDiv}>
      {rendersettingsModal()}
      {renderrulesModal()}
      {renderstartModal()}
      {PlayingDiv()}
      {CenterDivFunction()}
    </div>
  );
};
export default Game;
