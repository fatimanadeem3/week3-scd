import React from 'react'

function Section1({icon,title,desc,sub_title}) {
  return (
    <div className = "bg-white text text-black w-[250px] p-5 rounded-lg text-center font-medium">
                <div className="flex justify-center mb-4" >
                  {icon}
                </div>
                <h1 className = "text-[8px]">Dummy Test</h1>
                <p className = "text-[8px] mt-2">Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life.
                 Her sudden death leaves John in deep mourning.When sadistic mobster Iosef Tarasov(Alfie Allen) and his thugs steal John's surprised car and kill 
                 the puppy that was a last gift from his wife</p>
                <h1 className = "text-[8px] mt-2">Dummy Test</h1>
    </div>
  )
}

export default Section1