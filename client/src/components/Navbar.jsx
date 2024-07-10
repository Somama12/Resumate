import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='flex  justify-between bg-black text-white p-5'>
        
      <div className='font-bold text-xl text-sky-500'>ResuMate AI</div>

        
      <div>
        <ul className='list-none hidden sm:flex flex-row gap-10 cursor-pointer'>
            <Link to="/"><li className='font-poppins font-medium cursor-pointer text-[16px]'>Home</li></Link>
            <Link to="/grader"> <li className='font-poppins font-medium cursor-pointer text-[16px]'>Resume Grader</li></Link>
            <Link to="/generate"> <li className='font-poppins font-medium cursor-pointer text-[16px]'>Generate Resume</li></Link>
            <Link to="/bot"><li className='font-poppins font-medium cursor-pointer text-[16px]'>AI assistant</li></Link>
            
        </ul>
      </div>

      
      
      <div>
        <ul className='hidden sm:flex gap-4 font-bold'>
            <Link to="/login"><li><Button title="Log In"/></li></Link>
            <Link to="/register"><li><Button title="Sign Up"/></li></Link>
        </ul>

        <div className='sm:hidden flex flex-col'>
            <div onClick={()=>{setToggle(!toggle)}}>X</div>
            <div className={`${!toggle?'hidden':"flex"} p-6 black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Sign Up</li>
                    <li>Log In</li>   
                </ul>
            </div>
        </div>
      </div>



    </div>
  )
}

export default Navbar
