import React from 'react'

const Animations = () => {
    return (

        <>
            <div className='p-6 space-y-6 flex gap-30 flex-wrap'>


                {/* 1. Spin */}
                <div className='bg-red-500 size-24 rounded-full border-4 border-dashed border-white animate-spin flex items-center justify-center font-bold'>
                    Spin
                </div>

                {/* 2. Bounce */}
                <div className='bg-blue-500 size-24 rounded-lg animate-bounce flex items-center justify-center font-bold'>
                    Bounce
                </div>

                {/* 3. Pulse */}
                <div className='bg-green-500 size-24 rounded-lg animate-pulse flex items-center justify-center font-bold'>
                    Pulse
                </div>

                {/* 4. Ping */}
                <div className='bg-yellow-500 size-24 rounded-full animate-ping flex items-center justify-center font-bold text-black'>
                    Ping
                </div>

                {/* 5. Simple Hover Effect */}
                <button className='bg-purple-600 px-6 py-3 rounded-lg font-bold transition hover:scale-110 active:scale-90'>
                    Hover on me
                </button>

            </div>

            {/* 6. Slow motion Hover Effect */}

            <div>
                <button className='bg-gray-500 p-4 m-8 rounded-lg hover:bg-blue-500 transition duration-1000'> Slow hover</button>
                <button className='bg-fuchsia-500 p-4 m-8 rounded-lg hover:bg-green-500 transition duration-500 hover:opacity-5'> Hover and fade</button>
                <button className='bg-purple-500 p-4 m-8 rounded-lg hover:rotate-180  hover:scale-150 transition duration-1000'> Slow hover</button>

                <img className='m-25 w-60 hover:animate-bounce transition duration-1000' src="funny-monkey.png" alt="" />

            </div>


        </>


    )
}

export default Animations
