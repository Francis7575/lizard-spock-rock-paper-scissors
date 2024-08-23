import { GameContextProvider } from "./store/GameContext"
import Rules from "./components/Rules"
import Header from "./components/Header"
import Gameboard from "./components/GameBoard"

const App = () => {
  return (
    <GameContextProvider>
      <Header />
      <Gameboard />
      <Rules />
    </GameContextProvider>
  )
}

export default App