import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/marcas.module.scss";
import claps from "../styles/clapsMarcas.module.scss";
import SettingsModal from "../componentsMarcas/settingsModal";
import RulesModal from "../componentsMarcas/rulesModal";
import StartModal from "../componentsMarcas/startModal";
import ExitModal from "../componentsMarcas/exitModal";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import clapsImg from "../media/clapsImg.png";
import twitterImg from "../media/twitter.png";
import facebookImg from "../media/facebook.png";
import { Context } from "../context/AppContext";
import Head from "next/head";

const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const API_URL =
  ENVIRONMENT === "local" ? "http://localhost:3000" : "https://tablugames.com/";

const Game: NextPage = ({ data }: any) => {
  const {
    showSettingsModal,
    setShowSettingsModal,
    showRulesModal,
    setShowRulesModal,
    showStartModal,
    setShowStartModal,
    showExitModal,
    setShowExitModal,
    clickedMuletillas,
    clickedInsultos,
    quantityRound,
    teamOneColor,
    setTeamOneColor,
    teamTwoColor,
    setTeamTwoColor,
    teamOneName,
    setTeamOneName,
    teamTwoName,
    setTeamTwoName,
    timeRound,
    indexOnShuffled,
    setIndexOnShuffled,
  } = useContext<any>(Context);

  const [centerDivOpacity, setCenterDivOpacity] = useState<Number>(1);
  const [countDownGame, setCountDownGame] = useState<any>(60);
  const [startCounter, setStartCounter] = useState(false);
  const [currentRonda, setCurrentRonda] = useState(1);
  const [activeTeamOne, setActiveTeamOne] = useState(true);
  const [pointsTeamOne, setPointsTeamOne] = useState(0);
  const [pointsTeamTwo, setPointsTeamTwo] = useState(0);
  const [seeClaps, setSeeClaps] = useState(true);
  const [winnerTeam, setWinnerTeam] = useState("");
  const [drawGame, setDrawGame] = useState(false);
  const [restartCounterBoolean, setRestartCounterBoolean] = useState(false);
  const [plusPoint, setPlusPoint] = useState(false);
  const [minusPoint, setMinusPoint] = useState(false);
  const [passPoint, setPassPoint] = useState(false);
  const [blockPass, setBlockPass] = useState(false);
  const [blockAdd, setBlockAdd] = useState(false);
  const [blockSubstract, setBlockSubstract] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  interface CardsTableInterface {
    marca1: string;
    marca2: string;
    wordOne: string;
    wordTwo: string;
    wordThree: string;
    wordFour: string;
    wordFive: string;
    wordSix: string;
  }
  const [cardsTable, setCardsTable] = useState<CardsTableInterface>({
    marca1: "Nombre",
    marca2: "Apellido",
    wordOne: "Palabra 1",
    wordTwo: "Palabra 2",
    wordThree: "Palabra 3",
    wordFour: "Palabra 4",
    wordFive: "Palabra 5",
    wordSix: "Palabra 6",
  });
  const [currentCard, setCurrentCard] = useState(0);
  // agregar switches inplay paused, etc...

  const updateCardsTable = (key: string, value: string): void => {
    setCardsTable((prev) => ({ ...prev, [key]: value }));
  };

  const CardsData = async () => {
    updateCardsTable("marca1", data.CardsArray[currentCard].marca1);
    updateCardsTable("marca2", data.CardsArray[currentCard].marca2);
    updateCardsTable("wordOne", data.CardsArray[currentCard].word1);
    updateCardsTable("wordTwo", data.CardsArray[currentCard].word2);
    updateCardsTable("wordThree", data.CardsArray[currentCard].word3);
    updateCardsTable("wordFour", data.CardsArray[currentCard].word4);
    updateCardsTable("wordFive", data.CardsArray[currentCard].word5);
    updateCardsTable("wordSix", data.CardsArray[currentCard].word6);
  };
  useEffect(() => {
    CardsData();
  }, [currentCard]);

  useEffect(() => {
    BlurAndText();
  });
  useEffect(() => {
    BlurTimeUp();
  });

  const pivot4dev = () => {
    if (data.CardsArray !== undefined) {
      if (
        indexOnShuffled ==
        Object.keys(
          Array.from(
            { length: Object.keys(data.CardsArray).length + 2 },
            (v, k) => k + 1
          )
        ).length -
          2
      ) {
        setIndexOnShuffled(0);
      }
    }
  };
  pivot4dev();

  const cancelCounterQuitting = () => {
    if (restartCounterBoolean == true) {
      setStartCounter(false);
      setRestartCounterBoolean(false);
      setCountDownGame(timeRound);
    }
  };
  cancelCounterQuitting();

  const settModalShow = () => {
    setShowSettingsModal(true);
  };
  const rulesModalShow = () => {
    setShowRulesModal(true);
  };
  const startModalShow = () => {
    data.CardsArray.sort(() => 0.5 - Math.random());
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

  const BlurAndText = () => {
    if (plusPoint == true) {
      return (
        <div className={styles.gameCardBlur}>
          <h3>+1</h3>
        </div>
      );
    }
    if (minusPoint == true) {
      return (
        <div className={styles.gameCardBlur}>
          <h3>-1</h3>
        </div>
      );
    }
    if (passPoint == true) {
      return (
        <div className={styles.gameCardBlur}>
          <h3>Pasar</h3>
        </div>
      );
    }
  };
  const BlurTimeUp = () => {
    if (timeUp == true) {
      return (
        <div className={styles.timeUpBlur}>
          <h3>¡TIEMPO AGOTADO!</h3>
        </div>
      );
    }
  };

  const AddBlock = () => {
    if (blockAdd == true) {
      return styles.answerOkBlock;
    } else return styles.answerOk;
  };
  const SubstractBlock = () => {
    if (blockSubstract == true) {
      return styles.answerWrongBlock;
    } else return styles.answerWrong;
  };
  const PassBlock = () => {
    if (blockPass == true) {
      return styles.answerPassBlock;
    } else return styles.answerPass;
  };

  const PlayingDiv = () => {
    if (centerDivOpacity == 0) {
      return (
        <div className={styles.centerDiv}>
          {BlurTimeUp()}
          <h1 className={styles.headerTitle}>TABLÚ MARCAS</h1>
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
              {BlurAndText()}
              <h1>{cardsTable.marca1}</h1>
              <h2>{cardsTable.marca2}</h2>
              <ul className={styles.cardsUL1}>
                <li>{cardsTable.wordOne}</li>
                <li>{cardsTable.wordTwo}</li>
                <li>{cardsTable.wordThree}</li>
              </ul>
              <ul className={styles.cardsUL2}>
                <li>{cardsTable.wordFour}</li>
                <li>{cardsTable.wordFive}</li>
                <li>{cardsTable.wordSix}</li>
              </ul>
            </div>

            <div className={styles.gameCardRight}>
              <div className={AddBlock()} onClick={AddPoints}>
                <p>+1 Punto</p>
              </div>
              <div className={PassBlock()} onClick={Pass}>
                <p>Pasar</p>
              </div>
              <div className={SubstractBlock()} onClick={DeductPoints}>
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
          <h1 className={styles.headerTitle}>TABLÚ MARCAS</h1>
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
          <Link href="/">
            <div className={styles.closeBtn}>
              <p>X</p>
            </div>
          </Link>
        </div>
      );
    }
  };
  const GameOverScreen = () => {
    if (centerDivOpacity == 2) {
      return (
        <div className={styles.centerDiv}>
          <h1 className={styles.headerTitle}>TABLÚ MARCAs</h1>
          {ClapsCelebration()}
          <div className={styles.victoryH1}>
            <h1>Ganador: {renderGameResult()}</h1>
          </div>
          <div className={claps.clapsBtn} onClick={clapsBtn}>
            <p>Aplaudir</p>
          </div>
          <div className={styles.gameCounter}>
            <div className={TeamOneCardColorEnd()}>
              <p>{teamOneName}</p>
              <a>{pointsTeamOne}</a>
            </div>
            <div className={TeamTwoCardColorEnd()}>
              <p>{teamTwoName}</p>
              <a>{pointsTeamTwo}</a>
            </div>
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
          <div
            className={styles.twitterShare}
            onClick={() => {
              window.open(
                "https://twitter.com/intent/tweet?text=¡Qué%20divertido%20jugar%20%23TabluGames!%0AProb%C3%A1%20jugando%20con%20amigos.%0Awww.tablugames.com",
                "_blank"
              );
            }}
          >
            <Image layout="fill" alt="linkedbadge" src={twitterImg}></Image>
          </div>
          <div
            className={styles.facebookShare}
            onClick={() => {
              var url = "https://tablugames.com";
              window.open(
                "https://facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(url),
                "",
                "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
              );
            }}
          >
            <Image layout="fill" alt="linkedbadge" src={facebookImg}></Image>
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
  const TeamOneCardColorEnd = () => {
    if (teamOneColor == "Red") {
      return styles.cardRedTeamOneEnd;
    }
    if (teamOneColor == "Blue") {
      return styles.cardBlueTeamOneEnd;
    }
    if (teamOneColor == "Green") {
      return styles.cardGreenTeamOneEnd;
    }
    return styles.cardYellowTeamOneEnd;
  };
  const TeamTwoCardColorEnd = () => {
    if (teamTwoColor == "Red") {
      return styles.cardRedTeamTwoEnd;
    }
    if (teamTwoColor == "Blue") {
      return styles.cardBlueTeamTwoEnd;
    }
    if (teamTwoColor == "Green") {
      return styles.cardGreenTeamTwoEnd;
    }
    return styles.cardYellowTeamTwoEnd;
  };
  const CounterFunction = () => {
    setIndexOnShuffled(indexOnShuffled + 1);
    setStartCounter(true);
    CardsData();
    if (countDownGame == 1.5) {
      setCountDownGame(timeRound);
    }
  };
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
    setBlockSubstract(true);
    setBlockAdd(true);
    setBlockPass(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    setPlusPoint(true);
    setTimeout(() => setPlusPoint(false), 1000);
    setTimeout(() => setBlockPass(false), 1000);
    setTimeout(() => setBlockSubstract(false), 1000);
    setTimeout(() => setBlockAdd(false), 1000);
    if (activeTeamOne == true) {
      setPointsTeamOne(pointsTeamOne + 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo + 1);
    }
  };
  const DeductPoints = () => {
    setBlockSubstract(true);
    setBlockAdd(true);
    setBlockPass(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    setMinusPoint(true);
    setTimeout(() => setMinusPoint(false), 1000);
    setTimeout(() => setBlockPass(false), 1000);
    setTimeout(() => setBlockSubstract(false), 1000);
    setTimeout(() => setBlockAdd(false), 1000);
    if (activeTeamOne == true) {
      setPointsTeamOne(pointsTeamOne - 1);
    } else {
      setPointsTeamTwo(pointsTeamTwo - 1);
    }
  };

  const Pass = () => {
    setBlockSubstract(true);
    setBlockAdd(true);
    setBlockPass(true);
    setIndexOnShuffled(indexOnShuffled + 1);
    setCurrentCard(indexOnShuffled);
    setPassPoint(true);
    setTimeout(() => setPassPoint(false), 1000);
    setTimeout(() => setBlockPass(false), 1000);
    setTimeout(() => setBlockSubstract(false), 1000);
    setTimeout(() => setBlockAdd(false), 1000);
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
    if (countDownGame == 0.0) {
      setCountDownGame(timeRound);
      setStartCounter(false);
      setTimeUp(true);
      setTimeout(() => setTimeUp(false), 4000);
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
    if (countDownGame == 0.0 && currentRonda == quantityRound) {
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
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps2}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps3}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps4}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps5}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps6}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps7}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps8}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps9}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps10}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps11}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps12}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps13}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps14}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps15}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps16}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps17}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps18}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps19}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
          <div className={claps.claps20}>
            <Image alt="claps" width="25px" height="25px" src={clapsImg} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.mainDiv}>
      <Head>
        <title>Tablu Marcas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {showSettingsModal && (
        <SettingsModal CloseSettingsModal={setShowSettingsModal} />
      )}
      {showRulesModal && <RulesModal CloseRulesModal={setShowRulesModal} />}
      {showStartModal && (
        <StartModal
          CloseStartModal={setShowStartModal}
          GetOpacityfromStart={setCenterDivOpacity}
        />
      )}
      {showExitModal && (
        <ExitModal
          CloseExitModal={setShowExitModal}
          GetCounterFromExit={setStartCounter}
          GetOpacityfromExit={setCenterDivOpacity}
          GetRestarter={setRestartCounterBoolean}
        />
      )}
      {PlayingDiv()}
      {CenterDivFunction()}
      {GameOverScreen()}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${API_URL}/api/cardsMarcas`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
export default Game;
