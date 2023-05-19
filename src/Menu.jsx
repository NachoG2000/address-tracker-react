import React, {useState} from 'react'
import arrow from "./images/icon-arrow.svg"

function Menu(props) {

//   const [isHovered, setIsHovered] = useState(true)
  const [inputAddress, setInputAddress] = useState('');

  return (
    <div className='absolute z-40 top-1/2 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-2xl sm:text-4xl font-bold mb-6'>IP Address Tracker</h1>

            <div className="flex items-center mb-10">
                <input
                    type="text"
                    className="bg-white rounded-s-xl h-[50px] w-[220px] sm:w-[500px] px-4 focus:outline-none"
                    placeholder="Search for any IP address or domain"
                    onChange={props.handleChange}
                    name="inputAddress"
                    value={props.inputAddress || inputAddress}
                />
                <button
                    type="submit"
                    onClick={props.handleSubmit}
                    className="bg-black hover:bg-gray-700 text-white rounded-e-xl h-[50px] w-[70px] flex items-center"
                >
                    <img src={arrow} alt="arrow" className='ml-[30px]'/>
                </button>
            </div>
            
            <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 bg-white rounded-2xl py-5 px-5 w-auto text-center sm:text-start justify-around'>
                <div className='my-2 mx-2 lg:border-r-2 border-r-slate-200 overflow-hidden'>
                    <h6 className='text-gray-400 text-xs font-bold'>IP ADDRESS</h6>
                    <h4 className='font-bold text-2xl text-fit truncate sm:pr-6'>{props.APIinfo.ipAddress}</h4>
                    {/* <div className={` bottom-3 ${!isHovered ? "hidden" : "hidden lg:absolute"} bg-white rounded-xl shadow-black shadow-2xl mt-6 z-55 items-start px-2 py-2`}>  
                        <h4 className='font-bold text-2xl'>192.212.174.101</h4>
                    </div> */}
                </div>

                <div className='my-2 mx-2 lg:border-r-2 border-r-slate-200'>
                    <h6 className='text-gray-400 text-xs font-bold'>LOCATION</h6>
                    <h4 className='font-bold text-2xl sm:pr-6'>{props.APIinfo.city}, {props.APIinfo.region} {props.APIinfo.postalCode}</h4>
                </div>

                <div className='my-2 mx-2 lg:border-r-2 border-r-slate-200'>
                    <h6 className='text-gray-400 text-xs font-bold'>TIMEZONE</h6>
                    <h4 className='font-bold text-2xl sm:pr-6'>UTC {props.APIinfo.timezone}</h4>
                </div>

                <div className='my-2 mx-2'>
                    <h6 className='text-gray-400 text-xs font-bold'>ISP</h6>
                    <h4 className='font-bold text-2xl sm:pr-6'>{props.APIinfo.isp}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu

