import React,{useState} from 'react'

const AllPackage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


    const CheckmarkIcon = () => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                fill="#16537e"
                points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
            ></polygon>
            <polygon
                fill="#CCFF90"
                points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
            ></polygon>
        </svg>
    );
    const BuyNowButton =() =>(
       <div>
         <button onClick={handleOpenModal} className="btn w-[60%] md:w-[80%] lg:w-[50%]">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Buy Now
                            
                        </button>
            
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Confirm Your Purchase
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Are you sure you want to proceed with this purchase?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  handleCloseModal();
                  // Add your confirm logic here
                  console.log("Purchase Confirmed");
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Confirm
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
       </div>
    );
    return (
        <div className='text-white text-center text-2xl font-bold text-teal-500'>
            <h1>Buy Now Your Favourite Package</h1>
            <div className='grid grid-cols-2 gap-2 p-2 text-xl'>
                {/* Plan 1 */}
                <div className='border p-2 rounded-2xl	'>

                    <div>
                        <h1>Plan 1</h1>
                        <p>Price 300</p>

                    </div>
                    <div>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Daily 1 Ads
                        </p>
                        <p className="flex gap-2 items-center"><CheckmarkIcon />Validity 30 Days</p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon />Refer Level 3
                        </p>
                    </div>
                    <div className='py-2'>
                        <BuyNowButton />
                        
                    </div>
                </div>
                {/* Plan 2 */}
                <div className='border p-2 rounded-2xl	'>

                    <div>
                        <h1>Plan 2</h1>
                        <p>Price 500</p>

                    </div>
                    <div>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Daily 2 Ads
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Validity 30 Days
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon />Refer Level 3
                        </p>
                    </div>
                    <div className='py-2'>
                        <BuyNowButton />
                        
                    </div>
                </div>
                {/* Plan 3 */}
                <div className='border p-2 rounded-2xl	'>

                    <div>
                        <h1>Plan 3</h1>
                        <p>Price 1,000</p>

                    </div>
                    <div>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Daily 5 Ads
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Validity 30 Days
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon />Refer Level 3
                        </p>
                    </div>
                    <div className='py-2'>
                    <div className='py-2'>
                        <BuyNowButton />
                        
                    </div>
                        
                    </div>
                </div>
                {/* Plan 4 */}
                <div className='border p-2 rounded-2xl	'>

                    <div>
                        <h1>Plan 4</h1>
                        <p>Price 1500</p>

                    </div>
                    <div>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Daily 8 Ads
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon /> Validity 30 Days
                        </p>
                        <p className="flex gap-2 items-center">
                            <CheckmarkIcon />Refer Level 3
                        </p>
                    </div>
                    <div className='py-2'>
                    <div className='py-2'>
                        <BuyNowButton />
                        
                    </div>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AllPackage
