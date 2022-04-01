import React, { useState } from "react";
import styles from "./settingsModal.module.scss";

function settingsModal({ closeSettingsModal }: any) {
  const closeSettModal = () => {
    closeSettingsModal(false);
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.modalContainer}>
        <h1>Configuración</h1>
        <ul className={styles.configUl}>
          <li className={styles.firstLi}>
            <p>Cantidad de rondas</p>
          </li>
          <li className={styles.secondLi}>
            <p>Tiempo por ronda</p>
          </li>
          <li className={styles.thirdLi}>
            <p>Tiempo por ronda</p>
          </li>
          <li className={styles.fourthLi}></li>
          <li className={styles.fifthLi}>
            <p>Incrementos de dificultad</p>
          </li>
        </ul>
        {}
        <div className={styles.closeBtn} onClick={closeSettModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default settingsModal;
