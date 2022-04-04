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
  const [teamTwoName, setTeamTwoName] = useState("Team 2");
  const [centerDivOpacity, setCenterDivOpacity] = useState(1);
  const [countDownGame, setCountDownGame] = useState(60);
  const [startCounter, setStartCounter] = useState(false);
  const [currentRonda, setCurrentRonda] = useState(1);
  const [activeTeamOne, setActiveTeamOne] = useState(true);
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);

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
    setCountDownGame(timeRound);
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
  function PauseCounterFunction() {
    setStartCounter(false);
  }

  const RestartCounter = () => {
    if (startCounter == true) {
      alert("primero pausá");
    } else {
      setCountDownGame(timeRound);
    }
  };

  const PauseBtn = () => {
    if (startCounter == true) {
      return (
        <div className={styles.pauseBtn} onClick={PauseCounterFunction}>
          <p>Pausar</p>
        </div>
      );
    }
    return (
      <div className={styles.startRoundBtn} onClick={CounterFunction}>
        <p>Iniciar</p>
      </div>
    );
  };

  const RestartBtn = () => {
    if (startCounter == false) {
      return (
        <div className={styles.restartBtn} onClick={RestartCounter}>
          <p>Reiniciar</p>
        </div>
      );
    }
  };

  useEffect(() => {
    if (startCounter == true) {
      countDownGame > 0 &&
        setTimeout(() => setCountDownGame(countDownGame - 1), 1000);
    }
  });

  const AddPoints = () => {
    if (activeTeamOne == true) {
      setPointsTeamOne(pointsTeamOne + 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo + 1);
    }
  };
  const DeductPoints = () => {
    if (activeTeamOne == true) {
      setPointsTeamOne(pointsTeamOne - 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo - 1);
    }
  };

  const CurrTeamShow = () => {
    if (activeTeamOne == true) {
      return teamOneName;
    }
    {
      return teamTwoName;
    }
  };

  const FinishedAlert = () => {
    if (countDownGame == 0) {
      setStartCounter(false);
      setCountDownGame(timeRound);
      setActiveTeamOne(false);
    }
  };
  FinishedAlert();

  const PlayingDiv = () => {
    if (centerDivOpacity == 0) {
      return (
        <div className={styles.centerDiv}>
          <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>
          <div className={styles.gamingPad}>
            <div className={styles.gameCardLeft}>
              <div className={styles.startRound}>
                <p>{countDownGame}</p>
              </div>
              <div className={styles.roundsDiv}>
                <p>Ronda: {currentRonda}</p>
              </div>
            </div>
            <div className={styles.gameCard}>
              <h1>SUSANA</h1>
              <h2>GIMENEZ</h2>
              <ul className={styles.cardsUL1}>
                <li>CARLOS</li>
                <li>ZAMORA</li>
                <li>BOXEO</li>
              </ul>
              <ul className={styles.cardsUL2}>
                <li>CARLOS</li>
                <li>ZAMORA</li>
                <li>BOXEO</li>
              </ul>
            </div>
            <div className={styles.gameCardRight}>
              <div className={styles.answerOk} onClick={AddPoints}>
                <p>+1 Punto</p>
              </div>
              <div className={styles.answerPass}>
                <p>Pasar</p>
              </div>
              <div className={styles.answerWrong} onClick={DeductPoints}>
                <p>-1 Punto</p>
              </div>
            </div>
          </div>
          <div className={styles.gameCounter}>
            <div className={styles.roundOfTeam}>
              <p>Turno del equipo: {CurrTeamShow()}</p>
            </div>
            <div className={TeamOneCardColor()}>
              <p>{teamOneName}</p>
              <a>{pointsTeamOne}</a>
            </div>
            {PauseBtn()}
            {RestartBtn()}
            <div className={TeamTwoCardColor()}>
              <p>{teamTwoName}</p>
              <a>{pointsTeamTwo}</a>
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
