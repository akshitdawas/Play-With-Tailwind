import React from 'react'

const Width = () => {
  return (
    <div className="text-white space-y-4">
      <h1 className="bg-amber-950 p-5">default width of a h1</h1>
      <h1 className="bg-amber-900 p-5 w-52">width is (w-52)</h1>
      <h1 className="bg-amber-800 p-5 max-w-64">max width is (max-w-64)</h1>
      <h1 className="bg-amber-700 p-5 w-80">width is (w-80)</h1>
      <h1 className="bg-amber-600 p-5 w-full">width is full (w-full)</h1>
      <h1 className="bg-amber-400 p-5 w-1/2">width is half (w-1/2) (50%)</h1>
      <h1 className="bg-amber-300 p-5 w-1/3">width is one third (w-1/3) (33.3%)</h1>
      <h1 className="bg-amber-200 p-5 w-2/3">width is two third (w-2/3) (66.6%)</h1>
      <h1 className="text-black bg-amber-100 p-5 w-1/5">width is (w-1/5) (20%)</h1>



      {/* Exactly like your teacher wrote */}
      <h1 className="bg-red-950 p-5 w-xs">width is xs (320px)</h1>
      <h1 className="bg-red-900 p-5 w-xl">width is xl (576px)</h1>
      <h1 className="bg-red-800 p-5 w-2xl">width is 2xl (672px)</h1>


      <div>
        <h1 className="bg-amber-950 p-5 w-60 h-60"> width & height is (h-60)</h1>{/*normal way*/}
        <h1 className='bg-fuchsia-700 size-60' >fixed size 60*60</h1>
      </div>

      <div className='h-screen'>
        <h1 className="bg-amber-800 p-5 size-1/2 "> half screen </h1>
      </div>



    </div>
  )
}

export default Width
