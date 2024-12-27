import React from 'react'

const WorkPage = () => {
  return (
    <div className='p-4 text-white'>
      <h1 className='text-4xl py-2'>My Task</h1>
      <div className='grid grid-cols-2 gap-2'>
        <div className="card bg-gray-500 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-black	">Today Works</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View adds</button>
            </div>
          </div>
        </div>
        <div className="card bg-gray-500 w-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-black	">Today Works</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View adds</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
