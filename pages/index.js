import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';
import { useState } from 'react'
import Paymentform from './paymentform'



export default function Home() {

  let [isopen, setfunction] = useState(false);


  function HandleClick() {


    setfunction(() => {
      return isopen ? false : true;
    })

  }


  return (<div className='p-10'>



    <header className="bg-white dark:bg-gray-800 h-5/6">
      <nav className="border-b dark:border-gray-700 ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 font-bold" href="#">JeevanJyoti</a>
            </div>

            {/* hereoldbuttonm */}
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden">
              <button onClick={HandleClick} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>

          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className={`items-center ${isopen ? "block" : "hidden"} transition delay-1500 duration-300 md:flex `}>

            <div className="flex flex-col  mt-4 space-y-8 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-16">
              <a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
              <a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

              <button className="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Get in touch
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="w-full md:w-1/2">
          <div className="max-w-lg">
            <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Find your premium new glasses exported from US</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>Premium selection</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokelinecapjoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>Insurance</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>All legal documents</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>From US glasses dealers</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>Payment Security</span>
              </div>

              <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>

                <span>Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
        </div>
      </div>
    </header>
    <body >


      <div className=" flex flex-col px-6 h-5/6 py-10  mx-auto space-y-8 bg-indigo-500 md:h-128 md:py-16 md:flex-row md:justify-items-center md:items-center md:space-x-6  ">
        <div className="flex items-center bg-gray-500 justify-center w-full h-96 md:w-1/2">
          <img className="object-cover  w-full h-full  rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" />
        </div>

        <div className="w-full bg-green-300 md:w-1/2 ">
          <div className=" bg-red-200">
            <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Find your premium new glasses exported from US</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>

          </div>
        </div>


      </div>


      <div className="">

        <Paymentform />
      </div>



    </body>

  </div >

  )
}








