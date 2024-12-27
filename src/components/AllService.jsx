import { Link } from 'react-router-dom'
const AllService = () => {
    return (
        <div className="bg-gray-800 pt-4 p-8 font-bold text-center text-2xl text-white shadow-2xl">
<div className="py-6 divider divider-error">All service</div>
            
            <div className="px-2 grid grid-cols-4 justify-between h-auto w-full gap-4">

                <Link to="/work" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="work.webp" alt="My Work" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">My Work</p>
                </Link>
                <Link to="/deposit" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="deposit.webp" alt="Deposit" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Deposit</p>
                </Link>

                <Link to="/withdraw" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="withdraw.webp" alt="Withdraw" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Withdraw</p>
                </Link>

                <Link to="/package" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="package.webp" alt="Package" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Package</p>
                </Link>
                <Link to="/profile" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="profile.webp" alt="Profile" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Profile</p>
                </Link>
                <Link to="/refer" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="refer.webp" alt="Refer" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Refer</p>
                </Link>
                <Link to="/transaction" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="transactions.webp" alt="transactions" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Transaction</p>
                </Link>

                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
                    <img src="helpline.webp" alt="Helpline" className="w-16 h-16 object-cover rounded-full" />
                    <p className="mt-2 text-sm">Helpline</p>
                </a>
            </div>

        </div>
    )
}

export default AllService
