import React from 'react'
import { Link } from 'react-router-dom'
const OurPartner = () => {
  return (
    <div className='p-4 text-white bg-slate-600	shadow-2xl	'>
    <div className="divider divider-error"><h1 className=' text-2xl font-bold text-center '>Our Partner</h1></div>

    {/*  */}
    <div className='grid grid-cols-4'>
    <Link to="/" className="flex flex-col items-center hover:scale-105 transition-transform">
        <img src="daraz.webp" alt="Daraz" className="w-16 h-16 object-cover rounded-full" />
        <p className="mt-2 text-sm">Daraz</p>
      </Link>
    <Link to="/" className="flex flex-col items-center hover:scale-105 transition-transform">
        <img src="/ajkerdeal.webp"alt="Ajker Deal" className="w-16 h-16 object-cover rounded-full" />
        <p className="mt-2 text-sm">Ajker Deal</p>
      </Link>
    <Link to="/work" className="flex flex-col items-center hover:scale-105 transition-transform">
        <img src="/bikroy.webp" alt="Bikroy" className="w-16 h-16 object-cover rounded-full" />
        <p className="mt-2 text-sm">Bikroy</p>
      </Link>
    <Link to="/work" className="flex flex-col items-center hover:scale-105 transition-transform">
        <img  src="/othoba.webp" alt="Othoba" className="w-16 h-16 object-cover rounded-full" />
        <p className="mt-2 text-sm">Othoba</p>
      </Link>
    
      

   
    </div>
  </div>
  )
}

export default OurPartner
