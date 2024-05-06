import React from 'react'
import Header from '../components/Header'
import HeaderImage from "../assets/header_images/headerImage2.png";
const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col '>
        <div>
        <img src={HeaderImage} alt="" />
        <div>
        <div className="flex sm:flex-row flex-col  mt-20 mb-20  justify-evenly">
        <div className="w-[360px] h-15 relative" style={{ marginLeft: "60px" }}>
          <div className="w-[360px] h-10 left-0 top-0 absolute rounded-[20px] border border-zinc-300" />
          <div className="w-[315px] h-10 left-[20px] top-0 absolute">
            <input
              type="text"
              placeholder="Search......."
              
            //   value={searchValue}
              className="w-[290px] h-8 left-0 top-1 absolute text-justify text-slate-500 text-lg font-light font-['Akshar'] leading-[30px] focus:outline-none"
            />
            <div className="w-5 h-5 left-[295px] top-[10px] absolute justify-center items-center inline-flex">
             
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5  items-center">
        <h1 className="text-lg font-bold cursor-pointer hover:text-[#FC6736]">
           Fiction   
        </h1>
        <h1 className="text-lg font-bold cursor-pointer hover:text-[#FC6736]">
           Non-fiction   
        </h1>
        <h1 className="text-lg font-bold cursor-pointer hover:text-[#FC6736]">
           Mistory   
        </h1>
        <h1 className="text-lg font-bold cursor-pointer hover:text-[#FC6736]">
           Thiriller   
        </h1> 
        <h1 className="text-lg font-bold cursor-pointer hover:text-[#FC6736]">
           Children Books   
        </h1>
        </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Home