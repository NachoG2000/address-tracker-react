import React from 'react'
import arrow from "./images/icon-arrow.svg"
function Menu() {
  return (
    <div className='absolute z-50 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-3xl sm:text-4xl font-bold mb-6'>IP Address Tracker</h1>

            <div className="flex items-center mb-10">
                <input
                type="text"
                className="bg-white rounded-s-xl h-[50px] w-[220px] sm:w-[500px] px-4 focus:outline-none"
                placeholder="Search for any IP address or domain"
                />
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-700 text-white rounded-e-xl h-[50px] w-[70px] flex items-center"
                >
                    <img src={arrow} alt="arrow" className='ml-[30px]'/>
                </button>
            </div>
            
            <div className='flex flex-col md:flex-row bg-white rounded-2xl px-20 py-10'>
                <div>
                    <h6>IP ADRESS</h6>
                    <h4>192.212.174.101</h4>
                </div>
                <div className="border border-gray-300 h-full mx-4"></div>
                <div>
                    <h6>IP ADRESS</h6>
                    <h4>192.212.174.101</h4>
                </div>
                <div className="border border-gray-300 h-full mx-4"></div>
                <div>
                    <h6>IP ADRESS</h6>
                    <h4>192.212.174.101</h4>
                </div>
                <div className="border border-gray-300 h-full mx-4"></div>
                <div>
                    <h6>IP ADRESS</h6>
                    <h4>192.212.174.101</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu