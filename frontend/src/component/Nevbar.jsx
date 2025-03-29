import React from 'react'
import { FaUserCircle } from "react-icons/fa"

const Nevbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
    <h1 className="text-xl font-bold flex items-center gap-2">
      <span role="img" aria-label="cafeteria">☕</span> Smart Cafeteria
    </h1>
    <div className="flex space-x-6 text-gray-700">
      <a href="#" className="hover:text-green-600">Home</a>
      <a href="#" className="hover:text-green-600">Menu</a>
      <a href="#" className="hover:text-green-600">My Orders</a>
      <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
    </div>
  </nav>
  )
}

export default Nevbar