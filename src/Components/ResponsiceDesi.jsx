import React from 'react'

const ResponsiceDesi = () => {
  return (
    <div className='space-y-6'>

      {/* 1. Responsive Background Color & Text Size */}
      <div className='bg-red-500 md:bg-blue-500 lg:bg-green-500 p-8 rounded text-center'>
        <h1 className='text-lg md:text-3xl lg:text-5xl font-bold'>
          Resize screen to see color & size change!
        </h1>
      </div>

      {/* 2. Responsive Layout (Column on Mobile, Row on Desktop) */}
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-purple-600 p-6 rounded flex-1 text-center font-bold'>Box 1</div>
        <div className='bg-pink-600 p-6 rounded flex-1 text-center font-bold'>Box 2</div>
        <div className='bg-amber-600 p-6 rounded flex-1 text-center font-bold'>Box 3</div>
      </div>

    </div>
  )
}

export default ResponsiceDesi
