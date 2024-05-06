import React from 'react'
import ProfileImage from '../assets/navbar_images/profile.png'


const Navbar = () => {
  return (
    <div className='bg-[#FC6736] w-full h-[80px] flex flex-col justify-between Navbar  pl-14 px-14'>
        <div className='flex w-full flex-row justify-between m-auto items-center'>
            <div className="text-white text-[30px] font-bold">
                CODER's BOOKS
            </div>
            <div>

            </div>
            <div className="">
                <img className="h-[50px]" src={ProfileImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar

