import { useState, createContext, ReactNode, useContext } from "react";

// Define the shape of the context
interface GameContextType {
  playerScore: number;
  computerScore: number;
  result: string;
  userPick: string;
  compPick: string;
  checkForWin: (pick: "rock" | "paper" | "scissors" | "lizard" | "spock") => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

const defaultGameContext: GameContextType = {
  playerScore: 0,
  computerScore: 0,
  result: '',
  userPick: '',
  compPick: '',
  checkForWin: () => { },
};

const GameContext = createContext<GameContextType>(defaultGameContext);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerResult, setPlayerResult] = useState<string>('');
  const [userPick, setUserPick] = useState<string>('');
  const [compPick, setCompPick] = useState<string>('');

  function getComputerPick(): "rock" | "paper" | "scissors" | "lizard" | "spock" {
    const computerPick = Math.floor(Math.random() * 5);
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
      case 3:
        setCompPick('lizard');
        return "lizard";
      case 4:
        setCompPick('spock');
        return "spock";
      default:
        return "rock"; // Default fallback
    }
  }

  function checkForWin(pick: "rock" | "paper" | "scissors" | "lizard" | "spock") {
    const cpuPick = getComputerPick();
    setUserPick(pick);

    if (pick === cpuPick) {
      setPlayerResult("IT'S TIED");
    } else if (
      (pick === "rock" && cpuPick === "scissors") ||
      (pick === "rock" && cpuPick === "lizard") ||
      (pick === "lizard" && cpuPick === "spock") ||
      (pick === "lizard" && cpuPick === "paper") ||
      (pick === "paper" && cpuPick === "rock") ||
      (pick === "paper" && cpuPick === "spock") ||
      (pick === "spock" && cpuPick === "scissors") ||
      (pick === "spock" && cpuPick === "rock") ||
      (pick === "scissors" && cpuPick === "lizard") ||
      (pick === "scissors" && cpuPick === "paper")
    ) {
      setTimeout(() => {
        setPlayerScore((prevScore) => prevScore + 1);
        setPlayerResult('YOU WIN');
      }, 1500)
    } else {
      setTimeout(() => {
        setComputerScore((prevScore) => prevScore + 1)
        setPlayerResult('YOU LOSE');
      }, 1500)
    }
  }

  const values: GameContextType = {
    playerScore: playerScore,
    computerScore: computerScore,
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
