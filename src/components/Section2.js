import React from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { ImAidKit } from "react-icons/im";
import { TbSettingsCog } from "react-icons/tb";

function Section2() {
  return (
    <div className = "flex justify-center mt-10 gap-6 font-serif">
          <div className = "bg-white text text-black w-[250px] p-5 rounded-lg text-center font-medium">
            <div className="flex justify-center mb-4" >
              <FaPencilRuler />
            </div>
            <h1 className = "text-[8px]">Dummy Test</h1>
            <p className = "text-[8px] mt-2">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
             Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill 
             the puppy that was a last gift from his wife</p>
            <h1 className = "text-[8px] mt-2">Dummy Test</h1>
          </div>
            <div className = "bg-white text-black w-[250px] rounded-lg text-center font-medium">
              <div className="flex justify-center mb-4 mt-4">
                <ImAidKit />
              </div>
              <h1 className = "text-[8px]">Dummy Test</h1>
              <p className = "text-[8px] mt-2 ml-6 mr-6">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill the puppy that was a last gift from his wife</p>
              <h1 className = "text-[8px] mt-2">Dummy Test</h1>
            </div>
            <div className = "bg-white text-black w-[250px] rounded-lg text-center font-medium">
              <div className="flex justify-center mb-4 mt-4">
              <TbSettingsCog size={20} />
              </div>
              <h1 className = "text-[8px]">Dummy Test</h1>
              <p className = "text-[8px] mt-2 ml-6 mr-6">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
               Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill the puppy that was a last
               gift from his wife</p>
              <h1 className = "text-[8px] mt-2">Dummy Test</h1>
            </div>
        </div>
  )
}

export default Section2