import type { NextPage } from "next";
import styles from "../styles/game.module.scss";
import claps from "../styles/claps.module.scss";
import SettingsModal from "./components/settingsModal";
import RulesModal from "./components/rulesModal";
import StartModal from "./components/startModal";
import ExitModal from "./components/exitModal";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import clapsImg from "./media/clapsImg.png";

const Game: NextPage = () => {
  const [showsettingsModal, setShowSettingsModal] = useState(false);
  const [showrulesModal, setShowRulesModal] = useState(false);
  const [showstartModal, setShowStartModal] = useState(false);
  const [showexitModal, setShowExitModal] = useState(false);
  const [timeRound, setTimeRound] = useState(60);
  const [clickedMuletillas, setClickedMuletillas] = useState(false);
  const [clickedInsultos, setClickedInsultos] = useState(false);
  const [quantityRound, setQuantityRound] = useState(15);
  const [teamOneColor, setTeamOneColor] = useState("Red");
  const [teamTwoColor, setTeamTwoColor] = useState("Blue");
  const [teamOneName, setTeamOneName] = useState("Team 1");
  const [teamTwoName, setTeamTwoName] = useState("Team 2");
  const [centerDivOpacity, setCenterDivOpacity] = useState(1); // set back to one
  const [countDownGame, setCountDownGame] = useState(60);
  const [startCounter, setStartCounter] = useState(false);
  const [currentRonda, setCurrentRonda] = useState(1);
  const [activeTeamOne, setActiveTeamOne] = useState(true);
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);
  const [seeClaps, setSeeClaps] = useState(true);
  const [winnerTeam, setWinnerTeam] = useState("");
  const [drawGame, setDrawGame] = useState(false);
  const [restartCounterBoolean, setRestartCounterBoolean] = useState(false);

  const cancelCounterQuitting = () => {
    if (restartCounterBoolean == true) {
      setStartCounter(false);
      setRestartCounterBoolean(false);
      setCountDownGame(timeRound);
    }
  };
  cancelCounterQuitting();

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
  const renderexitModal = () => {
    if (showexitModal == true) {
      return (
        <ExitModal
          CloseExitModal={setShowExitModal}
          GetCounterFromExit={setStartCounter}
          GetOpacityfromExit={setCenterDivOpacity}
          GetRestarter={setRestartCounterBoolean}
        />
      );
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
    RestartCounter();
    setActiveTeamOne(true);
    setPointsTeamOne(0);
    setPointsTeamTwo(0);
    setTeamOneColor("Red");
    setTeamTwoColor("Blue");
    setTeamOneName("Team 1");
    setTeamTwoName("Team 2");
    setCurrentRonda(1);
    setStartCounter(false);
  };
  const exitModalShow = () => {
    setShowExitModal(true);
    setStartCounter(false);
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
                <p>
                  Ronda: {currentRonda}/{quantityRound}
                </p>
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
          <div className={styles.closeBtn} onClick={exitModalShow}>
            <p>X</p>
          </div>
        </div>
      );
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
  const GameOverScreen = () => {
    if (centerDivOpacity == 2) {
      return (
        <div className={styles.centerDiv}>
          <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>
          {ClapsCelebration()}
          <div className={styles.victoryH1}>
            <h1>Ganador: {renderGameResult()}</h1>
          </div>
          <div className={claps.clapsBtn} onClick={clapsBtn}>
            <p>Aplaudir</p>
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => {
              setCenterDivOpacity(1);
              setActiveTeamOne(true);
              setPointsTeamOne(0);
              setPointsTeamTwo(0);
              setTeamOneColor("Red");
              setTeamTwoColor("Blue");
              setTeamOneName("Team 1");
              setTeamTwoName("Team 2");
              setCurrentRonda(1);
              setStartCounter(false);
              setCountDownGame(timeRound);
            }}
          >
            <p>X</p>
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
    if (countDownGame == 1.5) {
      setCountDownGame(timeRound);
    }
  }
  function PauseCounterFunction() {
    setStartCounter(false);
  }
  const RestartCounter = () => {
    setCountDownGame(timeRound);
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
    if (startCounter == false && countDownGame != timeRound) {
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
        setTimeout(
          () => setCountDownGame((countDownGame - 0.1).toFixed(1)),
          100
        );
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
    if (countDownGame == 0.1) {
      setCountDownGame(timeRound);
      setStartCounter(false);

      setCurrentRonda(currentRonda + 1);
      if (activeTeamOne == true) {
        setActiveTeamOne(false);
      } else {
        setActiveTeamOne(true);
      }
      if (pointsTeamOne > pointsTeamTwo) {
        setWinnerTeam(teamOneName);
      }
      if (pointsTeamOne == pointsTeamTwo) {
        setDrawGame(true);
      }
      if (pointsTeamOne < pointsTeamTwo) {
        setWinnerTeam(teamTwoName);
      }
    }
  };

  const renderGameResult = () => {
    if (drawGame == true) {
      return "Ninguno! Empate";
    } else {
      return winnerTeam;
    }
  };

  const GameOver = () => {
    if (countDownGame == 0 && currentRonda == quantityRound) {
      setCenterDivOpacity(2);
    }
  };

  FinishedAlert();
  GameOver();

  const clapsBtn = () => {
    setSeeClaps(false);
    setTimeout(() => {
      setSeeClaps(true);
    }, 1);
  };

  const ClapsCelebration = () => {
    if (seeClaps == true) {
      return (
        <div className={claps.clapsContainer}>
          <div className={claps.claps1}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps2}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps3}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps4}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps5}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps6}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps7}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps8}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps9}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps10}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps11}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps12}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps13}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps14}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps15}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps16}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps17}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps18}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps19}>
            <Image width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps20}>
            <Image width="25px" height="25px" src={clapsImg} />
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
      {renderexitModal()}
      {PlayingDiv()}
      {CenterDivFunction()}
      {GameOverScreen()}
    </div>
  );
};
export default Game;
