import React from "react";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center sm:max-w-[60vw] max-w-[90vw] m-auto h-screen">
      <div className="mt-32 border border-sky-500 rounded-xl px-4 py-2 cursor-pointer hover:bg-sky-500 transition duration-150">
        Resumate AI
      </div>

      <div className="text-xl sm:text-[50px] font-semibold font-poppins mt-16">
        Unlease the Power of AI
      </div>

      <div className="mt-16 text-slate-300">
        <p className="text-slate-300 hidden sm:block">
          Unlock your career potential with our advanced resume builder powered
          by artificial intelligence. Whether you're starting your career or
          aiming for a promotion,{" "}
          <span className="font-semibold">Resumate</span> helps you create
          professional resumes tailored to your strengths and aspirations.
        </p>
        <p className="text-slate-300 sm:hidden ml-5">
          "Craft tailored resumes effortlessly with our Resumate, where AI meets
          career success."
        </p>
      </div>

      <div className="mt-16 flex gap-2">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail address..."
          required
          className='sm:w-[400px] w-[60%] rounded-xl border border-sky-500 px-4 py-2 focus:outline-none focus:border-blue-500'
        />
        <Button title="Get Notified"/>
      </div>
    </div>
  );
};

export default Homepage;
