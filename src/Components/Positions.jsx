import React from 'react'

const Positions = () => {
    return (
        <div className="text-white space-y-6">


            <div className='bg-fuchsia-800 size-100 relative'>
                <div className='bg-red-700 size-40 text-center absolute bottom-0 right-0'>Bottom Right</div>
                <div className='bg-blue-700 size-40 text-center absolute top-0 right-0'>Top Right</div>
                <div className='bg-green-700 size-40 text-center absolute bottom-0 left-0'>Bottom Left</div>
                <div className='bg-yellow-700 size-40 text-center absolute top-0 left-0'>Top Left</div>
            </div>

            <div className='size-100 bg-sky-800 relative'>
                <div className='bg-red-600 size-32 absolute inset-5'>Top Right</div>
                

            </div>


        </div>
    )
}

export default Positions
