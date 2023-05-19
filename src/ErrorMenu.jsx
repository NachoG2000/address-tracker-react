import React from 'react'

function ErrorMenu(props) {
  return (
    <div >
        <div className='absolute h-full w-full bg-black opacity-70 z-40'>
            
        </div>
        <div className='absolute z-50 opacity-100 top-1/2 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col bg-white rounded-2xl py-5 px-5 h-[50vh] w-[50vh] text-center sm:text-start justify-around'>
            <h1>{props.errorMessage}</h1>
            <button onClick={props.clearError}>OK</button>
        </div>
    </div>
  )
}

export default ErrorMenu