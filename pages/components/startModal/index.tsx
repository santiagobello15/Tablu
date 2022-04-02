import React from "react";
import styles from "./startModal.module.scss";

function StartModal({ CloseStartModal }: any) {
  const CloseStModal = () => {
    CloseStartModal(false);
  };

  return (
    <div className={styles.overlayModal}>
      <div className={styles.modalContainer}>
        <h1>Reglas</h1>
        <ul className={styles.configUl}>
          <li className={styles.firstLi}>
            <p>
              1) Un miembro del equipo {'"A"'} lee una carta, y tratará que sólo
              su equipo adivine el nombre de la persona sin decir las palabras
              prohibidas
            </p>
          </li>
          <li className={styles.secondLi}>
            <p>
              2) Cada acierto suma un punto. Se pueden pasar cartas, y ante un
              error, se pasa a la carta siguiente.
            </p>
          </li>
          <li className={styles.thirdLi}>
            <p>
              3) Si se opta jugar con incrementos de dificultad (insultos,
              muletillas), cada incumplimiento resta un punto.
            </p>
          </li>
          <li className={styles.fourthLi}>
            <p>4) Prohibido gritar</p>
          </li>
        </ul>
        <div className={styles.closeBtn} onClick={CloseStartModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default StartModal;
