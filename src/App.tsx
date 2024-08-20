import { GameContextProvider } from "./store/GameContext"
import Rules from "./components/Rules"
import Header from "./components/Header"

const App = () => {
  return (
    <GameContextProvider>
      <Header />
      <Rules />
    </GameContextProvider>
  )
}

export default App