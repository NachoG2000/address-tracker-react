import React from 'react'

function ErrorMenu(props) {
  return (
    <div >
        <div className='absolute h-[160vh] sm:h-[140vh] w-full bg-black opacity-70 z-40'> </div>

        <div className='absolute z-50 opacity-100 top-1/2 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col bg-white rounded-2xl py-5 px-5 w-[50vh] sm:w-auto text-center'>
            <h2 className='font-bold text-2xl'>Error</h2>
            <p className='mt-2 mb-4 text-gray-400'>{props.errorMessage}</p>
            <button onClick={props.clearError} className='font-semibold py-2 px-4 rounded-xl border-[2px] text-white bg-red-500 border-red-500'>OK</button>
        </div>
    </div>
  )
}

export default ErrorMenu