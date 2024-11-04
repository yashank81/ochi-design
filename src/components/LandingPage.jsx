import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
    <div className="textstructure mt-52 px-20">
        {["We Create","Eye Opening","Presentations"].map((item, index)=>{ 
            return (<div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                   {index === 1 && (
                    <div className="mr-[.7vw] w-[6vw] rounded-md h-[3.7vw] 
                    -top-[.35vw] relative bg-red-500"></div>)}
            <h1 className="pt-[1vw] -mb-[0.2vw] uppercase text-[3.8vw] leading-[4vw] 
             font-['Founders_Grotesk_X-Condensed']
             font-bold">
                {item}
                </h1>
                </div>
            </div>
        )})}
    </div>
    <div className="border-t-[1px] border-zinc-800 mt-20 
    flex justify-between items-center py-5 px-20">
        {["For public and private companies",
         "From the first pitch to IPO"
        ].map((item, index)=>( 
        <p className="text-md font-light tracking-tight 
        leading-none">{item}</p>
        ))}
        <div className="start flex itmes-center gap-5">
            <div
              className="px-5 py-2 border-[1px] border-zinc-400 
              font-light text-md uppercase rounded-full">
                start the project  
            </div>
            <div className="w-10 h-10 flex items-center 
            justify-center border-[2px] border-zinc-500 
            rounded-full">
                <span className="rotate-[45deg]">
                <FaArrowUpLong />
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LandingPage