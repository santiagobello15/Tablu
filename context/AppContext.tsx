import { createContext, useState } from "react";

export const Context = createContext(null);

const GameContext = ({ children }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  return (
    <Context.Provider
      value={{
        showSettingsModal,
        setShowSettingsModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GameContext;
