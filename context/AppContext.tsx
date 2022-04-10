import { createContext, useState } from "react";

export const Context = createContext(null);

const GameContext = ({ children }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [timeRound, setTimeRound] = useState(60);
  const [clickedMuletillas, setClickedMuletillas] = useState(false);
  const [clickedInsultos, setClickedInsultos] = useState(false);
  const [quantityRound, setQuantityRound] = useState(15);
  return (
    <Context.Provider
      value={{
        showSettingsModal,
        setShowSettingsModal,
        showRulesModal,
        setShowRulesModal,
        showStartModal,
        setShowStartModal,
        showExitModal,
        setShowExitModal,
        timeRound,
        setTimeRound,
        clickedMuletillas,
        setClickedMuletillas,
        clickedInsultos,
        setClickedInsultos,
        quantityRound,
        setQuantityRound,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GameContext;
