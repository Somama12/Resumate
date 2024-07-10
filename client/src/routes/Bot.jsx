import React from 'react'

const Bot = () => {
  return (
    <div className='flex'>
      <div className='hidden sm:flex basis-1/4 rounded-lg p-5 m-5 black-gradient'>
        This is sidebar
      </div>
      <div className='w-screen sm:basis-3/4 black-gradient rounded-lg p-5 m-5 flex flex-col'>
      <div className=" border border-sky-500 rounded-xl m-auto w-max px-4 py-2 cursor-pointer hover:bg-sky-500">
        Resumate AI
      </div>

        <div className='h-[75vh] sm:h-[80vh] relative rounded-lg border-sky-500 py-4 sm:px-[150px]'>

            <div className='flex h-[85%] sm:h-[90%] flex-col gap-2 overflow-y-scroll'>
                 <div className='bg-sky-500 max-w-[80%] sm:w-max p-4 rounded-xl'>
                <p>Hey, I am Resume Builder. How can I help you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl self-end'>
                <p>Can you help me to build my resume?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl self-end'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl self-end'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl self-end'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl self-end'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
                <div className='bg-sky-500 p-4 max-w-[80%] sm:w-max rounded-xl'>
                <p>Yes, Sure! How can i assist you?</p>
                </div>
            </div>
                
           
            <div className='absolute  top-[90%] flex gap-5'>
            <input
          type="text"
          id="message"
          name="message"
          placeholder="Ask AI..."
          required
          className='sm:w-[750px] w-[60%] rounded-xl border border-sky-500 px-4 py-2 focus:outline-none focus:border-blue-500'
        />
        <button
          type="submit"
          className="rounded-xl px-6 py-2 cursor-pointer bg-sky-500 "
        >
          Send
        </button>
            </div>

        </div>


      </div>
    </div>
  )
}

export default Bot
