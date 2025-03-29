import React from 'react';
import Home_bg from "../assets/Home_bg.jpg";
import { Link } from 'react-router-dom'



const Start = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className=' w-1/2 h-full p-8  flex justify-end'>
        <img src={Home_bg} className='h-full rounded-3xl mr-5' alt="" />
      </div>
      <div className=' w-1/2 h-full flex justify-center items-center'>
        <div className='w-1/2'>
        <h2 className='text-3xl font-bold inline-block'>Lets Get Started ➡️</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
                
    </div>
  )
}

export default Start