import { GameContextProvider } from "./store/GameContext"

const App = () => {
  return (
    <GameContextProvider>
      <div></div>
    </GameContextProvider>
  )
}

export default App