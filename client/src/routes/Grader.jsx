import React from 'react'
import assets from "../assets/assets.js"

const Grader = () => {
  return (
    <div className='flex rounded-lg p-5 m-5'>
      <div className='basis-2/3 flex flex-col py-10 px-[60px]'>
        <div className='mt-7 font-semibold text-sky-500 text-xl'>SCORE MY RESUME-FREE RESUME CHECKER</div>
        
        <div className='mt-[100px] font-semibold text-[50px]'>Get feedback on your resume,<br/> instantly</div>

        <div className='mt-5'>
        Our free AI-powered resume checker scores your resume on key criteria recruiters and hiring managers look for. Get actionable steps to revamp your resume and land more interviews.
        </div>

        <button
          type="submit"
          className="rounded-xl px-6 py-2 cursor-pointer bg-sky-500 mt-5 w-max "
        >
          Upload
        </button>
      </div>

      <div className='basis-1/3 rounded-full flex flex-col py-10 px-[60px]'>
        <div className='rounded-full w-[500px] mt-[50px]'>
            <img src={assets.ai} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Grader
