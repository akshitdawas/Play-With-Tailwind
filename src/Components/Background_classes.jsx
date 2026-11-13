import React from 'react'
import monkeyImg from '../assets/funny-monkey.png'

const Background_classes = () => {
    return (
        <div className='space-y-8 p-4'>
            <div
                className='h-96 w-full max-w-xl bg-cover bg-center bg-no-repeat rounded-xl p-6 text-white font-bold text-xl'
                style={{ backgroundImage: `url(${monkeyImg})` }}
            >
                Background_classes
            </div>

            <div className='bg-gradient-to-r from-red-500 to-yellow-500 h-96 w-145 rounded-2xl text-center font-bold text-xl flex items-center justify-center'>
                Gradient
            </div>

            <div className='size-145 bg-slate-900 rounded-2xl shadow-2xl shadow-fuchsia-500 flex items-center justify-center font-bold text-xl'>
                shadow
            </div>
        </div>
    )
}

export default Background_classes
