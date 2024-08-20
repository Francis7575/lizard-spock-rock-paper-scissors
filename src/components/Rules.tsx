import { useState } from "react";
import rulesImage from "../../assets/image-rules-bonus.svg"
import closeIcon from '../../assets/icon-close.svg'

const Rules = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleOpenRules = () => {
    setModalOpen(true)
  }

  const handleCloseRules = () => {
    setModalOpen(false)
  }

  return (
    <>
      {!modalOpen ? (
        <div className="flex justify-center">
          <button onClick={handleOpenRules}
            className="tracking-[2.5px] font-semibold py-[10px] px-[36px] rounded-[8px] border border-white
        text-white uppercase">
            Rules
          </button>
        </div>
      ) : (
        <section className="fixed inset-0 bg-white rounded-[8px] h-screen w-screen">
          <div className="flex justify-center h-screen flex-col items-center">
            <h2 className="text-[2rem] pt-[2rem] uppercase text-center font-bold leading-[2rem] text-dark-gray mb-[96px]">
              Rules
            </h2>
            <div>
              <img src={rulesImage} alt="Rules" />
            </div>
            <button className="mt-[60px]"
              onClick={handleCloseRules}>
              <img src={closeIcon} alt="Close Button" />
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default Rules