import { useState } from 'react';
import { useGameContext } from "../store/GameContext";
import { motion } from "framer-motion";
import pentagon from "/assets/bg-pentagon.svg";
import spock from "/assets/icon-spock.svg";
import scissors from "/assets/icon-scissors.svg";
import paper from "/assets/icon-paper.svg";
import rock from "/assets/icon-rock.svg";
import lizard from "/assets/icon-lizard.svg";
import GameResults from './GameResults';

const options = [
  { name: 'rock', src: rock, position: 'absolute bottom-[-25px] right-[5px] lg:right-[30px]' },
  { name: 'paper', src: paper, position: 'absolute top-12 right-[-30px] lg:right-[-10px] lg:top-14' },
  { name: 'scissors', src: scissors, position: 'absolute top-[-22px] left-[75px] lg:left-[115px]' },
  { name: 'lizard', src: lizard, position: 'absolute bottom-[-25px] left-[-5px] lg:left-[10px]' },
  { name: 'spock', src: spock, position: 'absolute top-12 left-[-30px] lg:top-14 lg:left-[-20px]' }
];
const transition = 'transition-transform duration-300 ease-in-out transform hover:scale-90';

const Gameboard = () => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const { checkForWin } = useGameContext();

  function handleClick(pick: "rock" | "paper" | "scissors" | "lizard" | "spock") {
    setShowResults(true);
    checkForWin(pick);
  }

  function setPlayAgain() {
    setShowResults(false);
  }

  return (
    <main>
      {showResults ? <GameResults playAgain={setPlayAgain} /> :
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .4, delay: 0.2, ease: "easeOut" }}
        >
          <section className='relative max-w-[220px] lg:max-w-[345px] mx-auto'>
            <div>
              <img src={pentagon} alt="Background Pentagon shape" />
            </div>
            {options.map(({ name, src, position }) => (
              <button key={name} onClick={() => handleClick(name as any)} className={position}>
                <img src={src} alt={name} className={`max-w-[80px] lg:max-w-[145px] ${transition}`} />
              </button>
            ))}
          </section>
        </motion.div>
      }
    </main>
  );
};

export default Gameboard;
