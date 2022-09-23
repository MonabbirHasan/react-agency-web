import React from 'react'
import Typed from 'react-typed';
function Banner() {
  return (
    <div className='w-full h-screen py-[100px] bg-[#382be4]'>
        <div className='max-w-[1240px] justify-center text-center mx-auto'>
            <h1 className=' md:text font-bold text-4xl text-white'>
            <Typed
                    strings={['How Are YOU','I am MonabbirHasan','I am professional website developer','I am Full-stack mobile app developer','I am SEO Expert','I am Freelancer']}
                    typeSpeed={40}
                    loop={true}
                    backSpeed={100}
                />
             </h1>
            <h3 className='mt-20 md:text font-bold text-4xl text-white'>
            <Typed
                    strings={['How Are YOU','I am professional website developer']}
                    typeSpeed={40}
                    loop={true}
                    backSpeed={100}
                />
             </h3>
             <div className='mt-10'>
              <p className='text-white text-[16px] p-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo nobis est cumque assumenda, cupiditate porro, amet minus enim vitae laboriosam ad, possimus repellendus? In ipsum nobis officiis fugit dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo nobis est cumque assumenda, cupiditate porro, amet minus enim vitae laboriosam ad, possimus repellendus? In ipsum nobis officiis fugit dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo nobis est cumque assumenda, cupiditate porro, amet minus enim vitae laboriosam ad, possimus repellendus? In ipsum nobis officiis fugit dolor?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo nobis est cumque assumenda, cupiditate porro, amet minus enim vitae laboriosam ad, possimus repellendus? In ipsum nobis officiis fugit dolor?
              </p>
              <button type="button" className='text-white mt-3 bg-[#2196f3] rounded p-2 w[50%]'>Lets Get Started</button>
             </div>
        </div>
    </div>
  )
}

export default Banner