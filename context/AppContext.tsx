import { createContext, useState } from "react";

export const Context = createContext({} as ContextState);
interface ContextState {
  darkMode: boolean | null;
  setDarkMode: any | null;
  showSettingsModal: boolean | null;
  setShowSettingsModal: any | null;
  showRulesModal: boolean | null;
  setShowRulesModal: any | null;
  showStartModal: boolean | null;
  setShowStartModal: any | null;
  showExitModal: boolean | null;
  setShowExitModal: any | null;
  timeRound: number | null;
  setTimeRound: any | null;
  clickedMuletillas: boolean | null;
  setClickedMuletillas: any | null;
  clickedInsultos: boolean | null;
  setClickedInsultos: any | null;
  quantityRound: number | null;
  setQuantityRound: any | null;
  teamOneColor: string | null;
  setTeamOneColor: any | null;
  teamTwoColor: string | null;
  setTeamTwoColor: any | null;
  teamOneName: string | null;
  setTeamOneName: any | null;
  teamTwoName: string | null;
  setTeamTwoName: any | null;
}
const GameContext = ({ children }: any) => {
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
