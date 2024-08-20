import { useGameContext } from "../store/GameContext"

const Header = () => {
  const { score } = useGameContext();
  const heading = ["Lizard", "Spock", "Rock", "Paper", 'Scissors'];

  return (
    <header className="px-8 pt-8 mb-[60px]">
      <div className="flex items-center justify-between py-4 w-full max-w-[400px] lg:max-w-[700px] px-8 
          mx-auto border-2 rounded-[5px] border-medium-gray mb-2">
        <div className="flex flex-col items-start text-white font-bold leading-none">
          {heading.map((item, idx) => (
            <h1 key={idx}>{item}</h1>
          ))}
        </div>
        <div className="flex flex-col items-center px-6 lg:px-8 py-2 bg-score-card rounded-[4px]">
          <h2 className="font-semibold text-blue">SCORE</h2>
          <h3 className="font-bold text-4xl lg:text-5xl">{score}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header