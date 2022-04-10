import { createContext, useState } from "react";

export const Context = createContext<Context.Provider | null>(null);

const GameContext = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [timeRound, setTimeRound] = useState<Number>(60);
  const [clickedMuletillas, setClickedMuletillas] = useState(false);
  const [clickedInsultos, setClickedInsultos] = useState(false);
  const [quantityRound, setQuantityRound] = useState(15);
  const [teamOneColor, setTeamOneColor] = useState<string>("Red");
  const [teamTwoColor, setTeamTwoColor] = useState<string>("Blue");
  const [teamOneName, setTeamOneName] = useState<string>("Team 1");
  const [teamTwoName, setTeamTwoName] = useState<string>("Team 2");
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
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
        teamOneColor,
        setTeamOneColor,
        teamTwoColor,
        setTeamTwoColor,
        teamOneName,
        setTeamOneName,
        teamTwoName,
        setTeamTwoName,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GameContext;
