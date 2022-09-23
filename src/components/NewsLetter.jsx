import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-[#2196f3] p-4'>
        <div className='max-w-[1240px] py-[20px] mx-auto md:flex justify-between'>
            <div className='p-3 h-[120px]'>
                <h1 className='md:text-[40px] font-bold text-white'>want to learn letest I'T skills..</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis cum earum omnis
                    </p>
            </div>
            <div className=' p-3 h-[120px]'>
                <input type="text" className='sm:w-full text-slate-600 mx-2 p-2' placeholder='Enter Your Name Email' />
                <button className='bg-[black] m-3 text-white rounded p-2'>Submit</button>
                <br />
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter