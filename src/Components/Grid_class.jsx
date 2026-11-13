import React from 'react'

const Grid_class = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2'>
        <div className="bg-red-100 col-span-2 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-200 col-span-3 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-300 col-span-4 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-green-400 row-span-2 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-green-500 row-span-3 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-green-600 row-span-4 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-700 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-800 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-900 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-300 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-400 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-500 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-600 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-700 p-10 border border-b-fuchsia-700"></div>
        <div className="bg-red-800 p-10 border border-b-fuchsia-700"></div>
    </div>
  )
}

export default Grid_class
