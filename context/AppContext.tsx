import { createContext, useState } from "react";

export const Context = createContext({} as ContextState);
interface ContextState {
  // set the type of state you want to handle with context e.g.

  darkMode: boolean | null;
        setDarkMode: boolean | null;
        showSettingsModal: boolean | null;
        setShowSettingsModal: boolean | null;
        showRulesModal: boolean | null;
        setShowRulesModal: boolean | null;
        showStartModal: boolean | null;
        setShowStartModal: boolean | null;
        showExitModal: boolean | null;
        setShowExitModal: boolean | null;
        timeRound: number | null;
        setTimeRound: number | null;
        clickedMuletillas: boolean | null;
        setClickedMuletillas: boolean | null;
        clickedInsultos: boolean | null;
        setClickedInsultos: boolean | null;
        quantityRound: number | null;
        setQuantityRound: number | null;
        teamOneColor: string | null;
        setTeamOneColor: string | null;
        teamTwoColor: string | null;
        setTeamTwoColor : string | null;
        teamOneName: string | null;
        setTeamOneName: string | null;
        teamTwoName: string | null;
        setTeamTwoName: string | null;
}
const GameContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [timeRound, setTimeRound] = useState(60);
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
        darkMode
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
