import { motion } from "framer-motion";
import { useGameContext } from "../store/GameContext";
import WinnerRing from './WinnerRing';

type GameResultsProps = {
  playAgain: () => void;
};

const GameResults = ({ playAgain }: GameResultsProps) => {
  const { userPick, compPick, result } = useGameContext();

  const h3Class = "uppercase font-bold tracking-[1.875px] leading-8 lg:text-[1.5rem]";

  // Determine if the user won
  const userWon = result === 'YOU WIN';
  const houseWon = result === 'YOU LOSE';

  const bounceAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -25, 0, -20, 0, -15, 0], // bounce amplitude
      transition: {
        duration: 1.5, // Total duration of the bounce
        times: [0, 0.4, 0.6, 0.8, 0.9, 1], // Keyframes for the bounce
      },
    },
  };

  return (
    <main className="relative">
      <motion.div
        className="flex justify-center items-start lg:items-center gap-8 text-white md:gap-44 lg:gap-20"
        variants={bounceAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-center gap-4 lg:flex-col-reverse lg:gap-14"
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.7, type: 'spring' }}
        >
          <button className="relative">
            <img
              src={`/assets/icon-${userPick}.svg`}
              alt={userPick}
              className="w-[131px] h-[133px] lg:w-[292px] lg:h-[286px]"
            />
            {userWon && <WinnerRing />}
          </button>
          <h3 className={h3Class}>You Picked</h3>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-[3.5rem] font-bold text-white mb-4 leading-normal">
            {result}
          </h2>
          <button
            onClick={playAgain}
            className="uppercase bg-play-again w-full max-w-[220px] py-[15px] rounded-[8px] shadow-gray tracking-[2.5px] font-semibold text-dark-gray transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Play Again
          </button>
        </motion.div>

        <div className="relative lg:self-end w-[149px] h-[133px] lg:w-[292px] lg:h-[286px] circle">
          <motion.div
            className="absolute inset-0 flex flex-col items-center gap-4 lg:flex-col-reverse lg:gap-14"
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", delay: 1.5, duration: 0.7, type: 'spring' }}
          >
            <button className="relative">
              <img
                src={`/assets/icon-${compPick}.svg`}
                alt={compPick}
                className="w-[131px] h-[133px] lg:w-[292px] lg:h-[286px]"
              />
              {houseWon && <WinnerRing />}
            </button>
            <h3 className={h3Class}>Computer Picked</h3>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="lg:hidden mt-[62px] flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-[3.5rem] font-bold text-white mb-4 leading-normal">
          {result}
        </h2>
        <button
          onClick={playAgain}
          className="uppercase bg-play-again w-full max-w-[220px] py-[15px] rounded-[8px] shadow-gray tracking-[2.5px] font-semibold text-dark-gray transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Play Again
        </button>
      </motion.div>
    </main>
  );
};

export default GameResults;
