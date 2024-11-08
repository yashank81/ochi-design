import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-20 mt-10">
              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#CDEA68] left-1/2 -translate-x-1/2 top-1/4 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">{"FYDE".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
              </div>

              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#CDEA68] right-1/2 translate-x-1/2 top-1/4 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">
              {"VISE".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
              </div>
              </div>
            </div>
            <div className="cards w-full flex gap-20 mt-10">
              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#A020F0] left-1/2 -translate-x-1/2 bottom-1 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">{"Trawa".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
              </div>
              </div>

              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#A020F0] right-1/2 translate-x-1/2 bottom-1 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">
              {"BLEND".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
              </div>
              </div>
            </div>
            <div className="cards w-full flex gap-20 mt-10">
              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#CDEA68] left-1/2 -translate-x-1/2 top-1/4 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">
              {"CNT".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
              </div>
              </div>

              <div className="cardcontainer relative w-1/2 h-[75vh]">
              <h1 className="absolute text-[#CDEA68] right-1/2 translate-x-1/2 top-1/4 -translate-y-2/3 z-[9] leading-none tracking-tighter text-8xl ">
              {"A2H".split('').map((item,index)=><span>{item}</span>)}</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
              </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured