import type { NextPage } from "next";
import styles from "../styles/game.module.scss";
import SettingsModal from "./components/settingsModal";
import RulesModal from "./components/rulesModal";
import React, { useState } from "react";

const Game: NextPage = () => {
  const [showsettingsModal, setShowSettingsModal] = useState(false);
  const [showrulesModal, setShowRulesModal] = useState(false);
  const [timeRound, setTimeRound] = useState(60);
  const [clickedMuletillas, setClickedMuletillas] = useState(false);
  const [clickedInsultos, setClickedInsultos] = useState(false);
  const [quantityRound, setQuantityRound] = useState(15);

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
  const settModalShow = () => {
    setShowSettingsModal(true);
  };
  const rulesModalShow = () => {
    setShowRulesModal(true);
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

  return (
    <div className={styles.mainDiv}>
      {rendersettingsModal()}
      {renderrulesModal()}
      <div className={styles.centerDiv}>
        <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>

        <div className={styles.btnsContainer}>
          <div className={styles.configButton} onClick={settModalShow}>
            <p>Configuración</p>
          </div>
          <div className={styles.rulesButton} onClick={rulesModalShow}>
            <p>Reglas</p>
          </div>
          <div className={styles.startButton}>
            <p>Comenzar</p>
          </div>
        </div>
        <div className={styles.timerView}>
          <p>
            {timeRound}
            {'"'}
          </p>
        </div>
        <div className={styles.roundsView}>
          <p>{quantityRound}</p>
        </div>
        <div className={styles.muletillaView}>
          <p>{muletillaFunction()}</p>
        </div>
        <div className={styles.insultosView}>
          <p>{insultosFunction()}</p>
        </div>
      </div>
    </div>
  );
};
export default Game;
