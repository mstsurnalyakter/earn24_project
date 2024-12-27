import React from 'react'
import useAuth from '../hooks/useAuth';

const Refer = () => {
  const { user } = useAuth();
  const referralLink = `http://localhost:5173?reference=${user?.name}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard');
  };
  return (<>
    <div className='text-white text-center'>
      <h1 className='text-4xl'>Refer</h1>
      <div className='h-[200px] w-30 border flex justify-center'>
        <img className='h-[100%]' src="referimg.webp" alt="" />
      </div>

    </div>

    <div className="flex bg-gray-400 m-5 flex-col rounded-lg py-5 shadow items-center text-white">
      <h2 className="text-2xl mb-4 font-bold whitespace-nowrap">Your Reference Link</h2>
      <div className="relative flex w-full justify-center max-w-[24rem]">
        <div className="relative w-full min-w-[200px] h-10">
          <input type="text" readOnly="" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-red-500 pr-20" placeholder=" " id="referralURL" value={referralLink} />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-red-500 before:border-blue-gray-200 peer-focus:before:!border-red-500 after:border-blue-gray-200 peer-focus:after:!border-red-500">
          </label>
        </div>
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none !absolute right-1 top-1 rounded" type="button"  onClick={handleCopy} id="copyBoard">COPY</button>
      </div>
      <p className="p-5 text-sm">You will get 10% commission on the amount deposited by the person you refer. If your
        refer joiner deposits 50,000 BDT then you will get instant 5,000 BDT and you can withdraw that money
        instantly.</p>
    </div>
  </>
  )
}

export default Refer
