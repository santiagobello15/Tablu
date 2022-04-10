import React, { useState, useEffect } from "react";
import styles from "./exitModal.module.scss";

function ExitModal({
  CloseExitModal,
  GetCounterFromExit,
  GetOpacityfromExit,
  GetRestarter,
}: any) {
  const [exitModalActive, setExitModalActive] = useState(false);
  const CloseExModal = () => {
    SendCountertoGame();
    setExitModalActive(true);
    setTimeout(() => CloseExitModal(false), 250);
  };

  const SendCountertoGame = () => {
    GetCounterFromExit(true);
  };
  const SendOpacitytoGame = () => {
    GetOpacityfromExit(1);
  };
  const SendRestarter = () => {
    GetRestarter(true);
  };

  const OutOfGame = () => {
    CloseExitModal(false);
    SendCountertoGame();
    SendOpacitytoGame();
    SendRestarter();
  };

  return (
    <div className={styles.overlayModal}>
      <div
        className={
          exitModalActive ? styles.modalContainerOut : styles.modalContainer
        }
      >
        <div className={styles.titlesContainer}>
          <h1>¿SEGURO DESEAS SALIR?</h1>
          <h3>SE PERDERÁN LOS PROGRESOS</h3>
          <h2 onClick={OutOfGame}>SÍ, SALIR</h2>
        </div>

        <div className={styles.closeBtn} onClick={CloseExModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default ExitModal;
