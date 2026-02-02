
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import { ImAidKit } from "react-icons/im";
import { TbSettingsCode } from "react-icons/tb";

import React from 'react'

function page() {
  return (
    <div className="bg-blue-950 h-full">
      <div className="flex justify-between py-[10px] px-[65px]">
        <p className="text-[20px] font-bold">Next.Js</p>
        <button className="bg-blue-300  rounded-[100px] px-[40px] font-bold">Cv</button>
      </div>
        <div className= "w-[40%] m-auto text-center flex flex-col items-center justify-center">
          <h1 className = "text-3xl text-blue-200 mt-3 font-bold">John Wick</h1>
          <h3 className = "mt-1 font-normal">Actor and Artist</h3>
          <p className = "text-center mt-2 font-normal text-[13px]">John Wick is a 2014 American neo-noir action thriller film directed by Chad 
             Stahelski (in his directorial debut) from a screenplay by Derek Kolstad.</p>
          <div className = "w-[250px] flex justify-between mt-5">
            <IoLogoFacebook />
            <IoLogoYoutube />
            <FaLinkedin />
          </div>
          <img src="/images/1.webp" alt ="" className="w-[150px] h-[150] rounded-full mt-10"></img>
        </div>
        <h1 className = "text-2xl mt-12 font-bold ml-[65px] ">Services I Offer</h1>
        <p className = "text-[11.6px] mt-3 font-medium ml-[65px] mr-[65px]">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
        Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill the puppy that was a last gift from his wife,
        John unleashes the remorless killing machine within and seeks vengeance.Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.</p>
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
              <TbSettingsCode />

              </div>
              <h1 className = "text-[8px]">Dummy Test</h1>
              <p className = "text-[8px] mt-2 ml-6 mr-6">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
               Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill the puppy that was a last
               gift from his wife</p>
              <h1 className = "text-[8px] mt-2">Dummy Test</h1>
            </div>
        </div>
        <h1 className = "text-2xl mt-12 font-bold ml-[65px]">Services I Offer</h1>
      <p className = "text-[11.6px] mt-3 font-medium ml-[65px] mr-[65px]">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
       Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill the puppy that was a last gift from his wife,
       John unleashes the remorless killing machine within and seeks vengeance.Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.</p>
       <div className="flex justify-center mt-6">
        <div>
          <div className="flex gap-3 mb-3">
          <img src="/images/images.jpeg" className="w-[500px] h-[300px]" />
          <img src="/images/1.webp" className="w-[500px] h-[300px]" />
          </div>
          <div className="flex gap-3 mb-3">
          <img src="/images/2.jpeg" className="w-[500px] h-[300px]" />
          <img src="/images/3.jpg" className="w-[500px] h-[300px]" />
          </div>
          <div className="flex gap-3 mb-3">
          <img src="/images/4.jpg" className="w-[500px] h-[300px]" />
          <img src="/images/5.jpeg" className="w-[500px] h-[300px]" />
          </div>
        </div>
       </div>
    </div>
  )
}

export default page