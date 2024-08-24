import { useState } from "react";
import rulesImage from "/assets/image-rules-bonus.svg";
import closeIcon from "/assets/icon-close.svg";

const Rules = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenRules = () => {
    setModalOpen(true);
  };

  const handleCloseRules = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = () => {
    handleCloseRules(); // Close modal when the overlay is clicked
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click events inside the modal from closing the modal
  };

  return (
    <>
      {!isModalOpen ? (
        <div className="flex flex-col items-center lg:items-end justify-end min-h-[25vh] lg:min-h-0 lg:mt-8 lg:mr-8 pb-8">
          <button
            onClick={handleOpenRules}
            className="tracking-[2.5px] font-semibold py-[10px] px-[36px] rounded-[8px] border border-white text-white uppercase transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Rules
          </button>
        </div>
      ) : (
        <section
          className="fixed inset-0 md:flex md:items-center md:justify-center md:min-h-screen md:z-20"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white md:max-w-[400px] md:py-8 md:max-h-[461px] rounded-[8px] h-full w-screen md:w-full md:h-auto md:mx-auto"
            onClick={handleModalClick}
          >
            <div className="flex justify-center h-full flex-col items-center md:block md:h-auto md:items-start md:justify-start">
              <div className="md:flex md:justify-between lg:px-8 md:w-full md:mb-[40px]">
                <h2 className="text-[2rem] pt-[2rem] uppercase text-center font-bold leading-[2rem] text-dark-gray mb-[96px] md:mb-0 md:pt-0">
                  Rules
                </h2>
                <button className="hidden md:block" onClick={handleCloseRules}>
                  <img src={closeIcon} alt="Close Button" />
                </button>
              </div>
              <div className="flex justify-center">
                <img src={rulesImage} alt="Rules" />
              </div>
              <button
                className="mt-[60px] md:hidden"
                onClick={handleCloseRules}
              >
                <img src={closeIcon} alt="Close Button" />
              </button>
            </div>
          </div>
        </section>
      )}
      {isModalOpen && (
        <div
          className="md:fixed md:inset-0 md:bg-black md:bg-opacity-50 md:z-10"
          onClick={handleCloseRules}
        ></div>
      )}
    </>
  );
};

export default Rules;
