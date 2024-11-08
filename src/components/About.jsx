import React from 'react'

function About() {
  return (
    <div className= 'w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
     <h1 className='font-["Neue_Montreal"] text-[3.7vw] leading-[3.8vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#a1b562]">
            <div className="w-1/2">
            <h1 className="text-5xl">Our approach:</h1>
            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Read More</button>
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] ">
            <img className="w-full h-full bg-cover rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About