import type { NextPage } from "next";
import styles from "../styles/game.module.scss";
import SettingsModal from "./components/settingsModal";
import React, { useState } from "react";

const Game: NextPage = () => {
  const [showsettingsModal, setshowsettingsModal] = useState(false);
  const rendersettingsModal = () => {
    if (showsettingsModal == true) {
      return <SettingsModal closeSettingsModal={setshowsettingsModal} />;
    }
  };
  const settModalShow = () => {
    setshowsettingsModal(true);
  };

  return (
    <div className={styles.mainDiv}>
      {rendersettingsModal()}
      <div className={styles.centerDiv}>
        <h1 className={styles.headerTitle}>TABLÚ FAMOSOS</h1>

        <div className={styles.btnsContainer}>
          <div className={styles.configButton} onClick={settModalShow}>
            <p>Configuración</p>
          </div>
          <div className={styles.rulesButton}>
            <p>Reglas</p>
          </div>
          <div className={styles.startButton}>
            <p>Comenzar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Game;
