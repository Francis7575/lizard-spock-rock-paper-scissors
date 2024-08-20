import { useState, createContext, ReactNode, useContext } from "react";

// Define the shape of the context
interface GameContextType {
  score: number;
  result: string;
  userPick: string;
  compPick: string;
  checkForWin: (pick: "rock" | "paper" | "scissors") => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

const defaultGameContext: GameContextType = {
  score: 0,
  result: '',
  userPick: '',
  compPick: '',
  checkForWin: () => {}, 
};

const GameContext = createContext<GameContextType>(defaultGameContext);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [playerResult, setPlayerResult] = useState<string>('');
  const [userPick, setUserPick] = useState<string>('');
  const [compPick, setCompPick] = useState<string>('');

  function getComputerPick(): "rock" | "paper" | "scissors" {
    const computerPick = Math.floor(Math.random() * 3);
    switch (computerPick) {
      case 0:
        setCompPick('rock');
        return "rock";
      case 1:
        setCompPick('paper');
        return "paper";
      case 2:
        setCompPick('scissors');
        return "scissors";
      default:
        return "rock"; // Default fallback
    }
  }

  function checkForWin(pick: "rock" | "paper" | "scissors") {
    const cpuPick = getComputerPick();
    setUserPick(pick);

    if (pick === cpuPick) {
      setPlayerResult('TIED');
    } else if (
      (pick === "rock" && cpuPick === "scissors") ||
      (pick === "paper" && cpuPick === "rock") ||
      (pick === "scissors" && cpuPick === "paper")
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
      setPlayerResult('WIN');
    } else {
      setPlayerScore((prevScore) => prevScore - 1);
      setPlayerResult('LOSE');
    }
  }

  const values: GameContextType = {
    score: playerScore,
    result: playerResult,
    userPick: userPick,
    compPick: compPick,
    checkForWin,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}

export default GameContext;
