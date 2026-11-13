import React from 'react'

const Columns = () => {
  return (
    <>
      <div className='columns-2'>
        <h1 className='bg-red-200'>Heading 1</h1>
        <h1 className='bg-red-300'>Heading 2</h1>
        <h1 className='bg-red-400'>Heading 3</h1>
        <h1 className='bg-red-500'>Heading 4</h1>
        <h1 className='bg-red-600'>Heading 5</h1>
        <h1 className='bg-red-700'>Heading 6</h1>

      </div>


      <div className='columns-1 lg:columns-4 md:columns-3 sm:columns-2  m-5'>

        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />




      </div>


    <h1 className='text-3xl  font-bold my-5'> Auto Responsive Columns </h1>

      <div className='columns-3xs'>
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
        <img src="funny-monkey.png" alt="" />
      </div>

    </>
  )
}

export default Columns