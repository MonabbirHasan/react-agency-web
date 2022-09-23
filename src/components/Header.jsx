import React, { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="bg-[#2196f3] p-4">
      <div className="max-w-[1240px] p-2 items-center flex justify-between mx-auto">
        <div className="logo text-3xl font-bold border-l-4 border-r-2">
          Hasan.com
        </div>

        <div className="nav-menu">
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiFillCloseCircle
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}
          <ul className="hidden md:flex text-white gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Company</li>
            <li>Course</li>
            <li>Contact</li>
          </ul>
          <ul
            className={` duration-500 md:hidden left[-100%] w-full h-screen text-white fixed top-[85px] bg-black left-0
                    ${toggle ? 'left-[0]' : 'left-[100%]'}`}
          >
            <li className="p-5">Home</li>
            <li className="p-5">About</li>
            <li className="p-5">Company</li>
            <li className="p-5">Course</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
