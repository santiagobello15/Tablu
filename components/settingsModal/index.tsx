import React, { useState, useContext } from "react";
import styles from "./settingsModal.module.scss";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Checkbox,
} from "@chakra-ui/react";
import { Context } from "../../context/AppContext";

function SettingsModal({ CloseSettingsModal }: any) {
  const [exitModalActive, setExitModalActive] = useState(false);
  const {
    setTimeRound,
    setClickedMuletillas,
    setClickedInsultos,
    setQuantityRound,
  } = useContext<any>(Context);

  const CloseSettModal = () => {
    setExitModalActive(true);
    setTimeout(() => CloseSettingsModal(false), 250);
  };

  return (
    <div className={styles.overlayModal}>
      <div
        className={
          exitModalActive ? styles.modalContainerOut : styles.modalContainer
        }
      >
        <h1>Configuración</h1>
        <ul className={styles.configUl}>
          <li className={styles.firstLi}>
            <p>Cantidad de rondas</p>
          </li>
          <li className={styles.secondLi}>
            <Slider
              onChange={(val: number) => setQuantityRound(val)}
              aria-label="slider-ex-1"
              defaultValue={15}
              min={1}
              max={25}
              step={5}
              colorScheme="purple"
            >
              <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
                1
              </SliderMark>
              <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                5
              </SliderMark>
              <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
                10
              </SliderMark>
              <SliderMark value={15} mt="1" ml="-2.5" fontSize="sm">
                15
              </SliderMark>
              <SliderMark value={20} mt="1" ml="-2.5" fontSize="sm">
                20
              </SliderMark>
              <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </li>
          <li className={styles.thirdLi}>
            <p>Tiempo por ronda</p>
          </li>
          <li className={styles.fourthLi}>
            <Slider
              onChange={(val) => setTimeRound(val)}
              aria-label="slider-ex-1"
              defaultValue={60}
              min={5}
              max={90}
              step={5}
              colorScheme="purple"
            >
              <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                5
              </SliderMark>
              <SliderMark value={30} mt="1" ml="-2.5" fontSize="sm">
                30
              </SliderMark>
              <SliderMark value={60} mt="1" ml="-2.5" fontSize="sm">
                60
              </SliderMark>
              <SliderMark value={90} mt="1" ml="-2.5" fontSize="sm">
                90
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </li>
          <li className={styles.fifthLi}>
            <p>Incrementos de dificultad</p>
          </li>
          <li className={styles.sixthLi}>
            <div className={styles.checkbtn1}>
              <Checkbox
                onChange={(e) => setClickedMuletillas(e.target.checked)}
                colorScheme="purple"
              >
                <a>Sin muletillas</a>
              </Checkbox>
            </div>
            <div className={styles.checkbtn2}>
              <Checkbox
                onChange={(e) => setClickedInsultos(e.target.checked)}
                colorScheme="purple"
              >
                <a>Sin insultos</a>
              </Checkbox>
            </div>
          </li>
        </ul>
        {}
        <div className={styles.closeBtn} onClick={CloseSettModal}>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
