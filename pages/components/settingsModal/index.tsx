import React, { useState } from "react";
import styles from "./settingsModal.module.scss";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Checkbox,
} from "@chakra-ui/react";

function SettingsModal({
  GetRoundsFromSettings,
  GetTimeFromSettings,
  CloseSettingsModal,
  GetMuletillasFromSettings,
  GetInsultosFromSettings,
}: any) {
  const [sliderRoundsValue, setSliderRoundsValue] = useState(15);
  const [muletillaChecked, setMuletillaChecked] = useState(false);
  const [insultosChecked, setInsultosChecked] = useState(false);
  const [sliderTimeValue, setSliderTimeValue] = useState(60);

  const CloseSettModal = () => {
    SendTimetoGame();
    SendRoundstoGame();
    SendMuletillastoGame();
    SendInsultostoGame();
    CloseSettingsModal(false);
  };

  const SendTimetoGame = () => {
    GetTimeFromSettings(sliderTimeValue);
  };
  const SendRoundstoGame = () => {
    GetRoundsFromSettings(sliderRoundsValue);
  };
  const SendMuletillastoGame = () => {
    GetMuletillasFromSettings(muletillaChecked);
  };
  const SendInsultostoGame = () => {
    GetInsultosFromSettings(insultosChecked);
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
            <Slider
              onChange={(val: number) => setSliderRoundsValue(val)}
              aria-label="slider-ex-1"
              defaultValue={15}
              min={5}
              max={25}
              step={5}
              colorScheme="purple"
            >
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
              onChange={(val) => setSliderTimeValue(val)}
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
                onChange={(e) => setMuletillaChecked(e.target.checked)}
                colorScheme="purple"
              >
                <a>Sin muletillas</a>
              </Checkbox>
            </div>
            <div className={styles.checkbtn2}>
              <Checkbox
                onChange={(e) => setInsultosChecked(e.target.checked)}
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
