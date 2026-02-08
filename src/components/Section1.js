import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
function Section1() {
  return (
    
    <div className='bg-blue-950 h-screen'>
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
    </div>
  )
}

export default Section1