import React from "react";
import Button from "../components/Button";

const Generate = () => {
  return (
    <form className="flex flex-col" action="/generate">
      <div className="m-auto">
        {" "}
        <Button title="Enter Your Information" />
      </div>

      <div className="flex">
        <div className="basis-1/2 black-gradient rounded-lg p-5 m-5 flex  gap-2 flex-col">
          <h1 className="text-xl font-bold font-sans m-auto w-full text-center  my-3">Personal Information</h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your name...."
            required
            className="sm:w-[400px] w-[60%] rounded-xl border border-sky-500 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email...."
            required
            className="sm:w-[400px] w-[60%] rounded-xl border border-sky-500 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="basis-1/2 black-gradient rounded-lg p-5 m-5">
          Hey this is right side
        </div>
      </div>
    </form>
  );
};

export default Generate;
