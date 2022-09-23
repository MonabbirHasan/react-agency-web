import React from 'react'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
function Footer() {
  return (
    <div className="w-full bg-[#2196f3] p-4">
      <div className="max-w-[1240px] py-[50px] mx-auto md:flex justify-between">
        <div className="p-3 h-[120px]">
          <h1 className="md:text-[40px] font-bold text-white">
            want to learn letest I'T skills..
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            cum earum omnis
          </p>
          <h4 className="grid grid-flow-col mt-6 font-bold text-[30px]  text-[#ffffff]">
            <BsFacebook className="bg-black rounded p-2 text-[40px] hover:text-yellow-300" />
            <GrInstagram className="bg-black rounded p-2 text-[40px] hover:text-yellow-300" />
            <AiOutlineTwitter className="bg-black rounded p-2 text-[40px] hover:text-yellow-300" />
            <BsLinkedin className="bg-black rounded p-2 text-[40px] hover:text-yellow-300" />
          </h4>
        </div>
        <div className=" p-3 h-[120px]">
          <input
            type="text"
            className="sm:w-full text-slate-600 mx-2 p-2"
            placeholder="Enter Your Name Email"
          />
          <button className="bg-[black] m-3 text-white rounded p-2">
            Submit
          </button>
          <br />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
