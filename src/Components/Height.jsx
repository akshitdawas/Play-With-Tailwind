import React from 'react'

const Height = () => {
  return (
    <div className="text-white space-y-4">
      <h1 className="text-2xl font-bold mb-4">Height Practice</h1>

      <div className='h-screen'>
        <h1 className='bg-green-500'>default height</h1>
        {/*<h1 className='bg-red-500 h-full'>h-screen</h1>*/}
        {/*<h1 className='bg-blue-500 h-1/2'>1/2 height</h1>*/}
        <h1 className='bg-fuchsia-500 max-h-50 h-100'>max-h-50 </h1>

      </div>
    </div>
  )
}

export default Height
