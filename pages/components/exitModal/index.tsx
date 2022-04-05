import React from "react";
import styles from "./exitModal.module.scss";

function ExitModal({ CloseExitModal }: any) {
  const CloseExModal = () => {
    CloseExitModal(false);
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.modalContainer}>
        <h1>¿SEGURO DESEAS SALIR?</h1>
        <h2>VAS A PERDER LOS PROGRESOS DE LA PARTIDA</h2>

        <div className={styles.closeBtn} onClick={CloseExitModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default ExitModal;
