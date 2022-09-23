import React from 'react'
import img from "../assets/img.png"
function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto   my-10 md:grid grid-cols-2 '>
        <div className='border md:w-[90%] col-span-1'>
            <img src={img} alt="" className='inline' />
        </div>
        <div className='border justify-center col-span-1'>
            <h4 className='p-3 text-left font-bold text-2xl'>Welcom To Our Agency</h4>
            <p className='font-bold  p-3'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            </p>
            <div className='ml-3 mt-10'>
              <button className='py-2 px-1 bg-[#2196f3] text-white rounded w-[30%]'>Get  Started</button>
            </div>
        </div>
    </div>
  )
}

export default Experts