import React, { useState } from "react";
import styles from "./settingsModal.module.scss";

function settingsModal({ closeSettingsModal }) {
  const closeSettModal = () => {
    closeSettingsModal(false);
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.modalContainer}>
        <h1>Configuración</h1>

        <div className={styles.closeBtn} onClick={closeSettModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default settingsModal;
