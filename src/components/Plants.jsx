import React from 'react'
// import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserAstronaut, FaUserInjured, FaUserSecret } from 'react-icons/fa'
function Plants() {
  return (
    <div className="py-[100px]">
      <div className="md:grid grid-cols-3 gap-3 max-w-[1240px] mx-auto">
        <div className="shadow-xl text-center h-[400px] hover:scale-105 mt-20 duration-600">
          <h1 className="text-[100px] text-[#2196f3] ml-[35%] text-center justify-center">
            <FaUserAstronaut />
          </h1>
          <h4 className="text-black py-10 font-bold text-[30px text-center]">
            Select your plan
            <h3 className="font-bold text-[30px] mt-4">$300</h3>
          </h4>
          <button className="text-white w-[50%] bg-[black] p-3 rounded">
            By Now
          </button>
        </div>
        <div className="shadow-xl text-center h-[400px] hover:scale-105 mt-20 duration-600">
          <h1 className="text-[100px] text-[#2196f3] ml-[35%] text-center justify-center">
            <FaUserInjured />
          </h1>
          <h4 className="text-black py-10 font-bold text-[30px text-center]">
            Select your plan
            <h3 className="font-bold text-[30px] mt-4">$300</h3>
          </h4>
          <button className="text-white w-[50%] bg-[black] p-3 rounded">
            By Now
          </button>
        </div>
        <div className="shadow-xl text-center h-[400px] hover:scale-105 mt-20 duration-600">
          <h1 className="text-[100px] ml-[35%] text-[#2196f3] text-center justify-center">
            <FaUserSecret />
          </h1>
          <h4 className="text-black py-10 font-bold text-[30px text-center]">
            Select your plan
            <h3 className="font-bold text-[30px] mt-4">$300</h3>
          </h4>
          <button className="text-white w-[50%] bg-[black] p-3 rounded">
            By Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Plants
