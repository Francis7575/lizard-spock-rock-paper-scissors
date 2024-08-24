import { useGameContext } from "../store/GameContext";

const Header = () => {
  const { playerScore, computerScore } = useGameContext();
  const heading = ["Lizard", "Spock", "Rock", "Paper", "Scissors"];

  return (
    <header className="px-8 pt-8 lg:pt-12 lg:px-0 mb-[60px] lg:mb-[72px]">
      <div className="flex items-center justify-between py-4 w-full max-w-[400px] lg:max-w-[700px] px-8 
        mx-auto border-2 rounded-[5px] border-medium-gray mb-2 lg:px-0 lg:pl-8 lg:pr-[1.5rem]">
        <div className="flex flex-col items-start text-white font-bold leading-none">
          {heading.map((item, idx) => (
            <h1 key={idx} className="lg:text-[1.75rem] lg:leading-[22px]">
              {item}
            </h1>
          ))}
        </div>
          <div className="flex flex-col items-center px-6 lg:px-12 py-2 lg:py-4 bg-score-card rounded-[4px] lg:rounded-[8px]">
            <h2 className="font-semibold text-blue">SCOREBOARD</h2>
            <h3 className="font-bold">Your Score: {playerScore}</h3>
            <h3 className="font-bold">Computer Score: {computerScore}</h3>
          </div>
      </div>
    </header>
  );
};

export default Header;
