import { GameContextProvider } from "./store/GameContext"
import Rules from "./components/Rules"

const App = () => {
  return (
    <GameContextProvider>
      <Rules />
    </GameContextProvider>
  )
}

export default App