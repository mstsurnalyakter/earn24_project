import React from 'react'
import { Link } from 'react-router-dom'
const Company = () => {
  return (
    <div className='p-4 text-white bg-gray-700 shadow-2xl	'>
      
      <div className="py-6 divider divider-error"><h1 className=' text-2xl font-bold text-center '>Company Information</h1></div>

      <div className='grid grid-cols-4'>
        <Link to="/change-password" className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src="set.avif" alt="Settings" className="w-16 h-16 object-cover rounded-full" />
          <p className="mt-2 text-sm">Setting</p>
        </Link>
       
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src="./about.webp" alt="About" className="w-16 h-16 object-cover rounded-full" />
          <p className="mt-2 text-sm">About</p>
          </a>
      
       

        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
        <img src="./yt.webp" alt="Youtube" className="w-16 h-16 object-cover rounded-full" />
          <p className="mt-2 text-sm">Youtube</p>
        </a>

        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
          <img src="telegram.png" alt="Telegram" className="w-16 h-16 object-cover rounded-full" />
          <p className="mt-2 text-sm">Telegram</p>
        </a>





      </div>
    </div>
  )
}

export default Company
