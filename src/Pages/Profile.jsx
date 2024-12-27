import React from 'react';
import useAuth from '../hooks/useAuth';
import useDeposit from '../hooks/useDeposit';

const Profile = () => {
  const { user } = useAuth();
  const { deposits, error } = useDeposit();
 
  // Find all deposits that match the user's phone number
  const matchingDeposits = deposits.filter((deposit) => deposit.paymentNumber === user?.phone);
  console.log("matchingDeposits", matchingDeposits);

  // Calculate the total deposit amount
  const totalDeposit = matchingDeposits.length > 0 
    ? matchingDeposits.reduce((acc, deposit) => acc + parseFloat(deposit.amount), 0) 
    : 0;
  console.log("totalDeposit", totalDeposit);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid lg:w-[50%] bg-slate-400 mx-4 rounded-lg overflow-hidden">
        {/* Name Section */}
        <div className="flex p-4 items-center gap-2 border-b border-t border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Name: {user?.name}
        </div>

        {/* Mobile Number Section */}
        <div className="flex p-4 items-center gap-2 border-b border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Mobile Number: {user?.phone}
        </div>

        {/* Main Balance Section */}
        <div className="flex p-4 items-center gap-2 border-b border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.963a1.5 1.5 0 00-2.17-1.341l-.415.207a.75.75 0 00.67 1.342L9 7.963V9.75h-.75a.75.75 0 100 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0016.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 100 1.5h.656a3.002 3.002 0 01-4.327 1.893.113.113 0 01-.045-.051.336.336 0 01-.034-.154V11.25h5.25a.75.75 0 000-1.5H10.5V7.963z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Main Balance: 0.00 BDT
        </div>

        {/* Deposit Balance Section */}
        <div className="flex p-4 items-center gap-2 border-b border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.963a1.5 1.5 0 00-2.17-1.341l-.415.207a.75.75 0 00.67 1.342L9 7.963V9.75h-.75a.75.75 0 100 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0016.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 100 1.5h.656a3.002 3.002 0 01-4.327 1.893.113.113 0 01-.045-.051.336.336 0 01-.034-.154V11.25h5.25a.75.75 0 000-1.5H10.5V7.963z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Deposit Balance: {totalDeposit} BDT
        </div>

        {/* Package Status Section */}
        <div className="flex p-4 items-center gap-2 border-b border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 00-.378.895 8.753 8.753 0 01-4.366 1.226 8.734 8.734 0 01-4.366-1.226 2.25 2.25 0 00-.378-.895l-.001-.144c0-.53.11-.999.35-1.453l.001-.003a10.875 10.875 0 016.718 0l.001.003c.239.454.35.923.35 1.453z"
              />
            </svg>
          </span>
          Package Status: Active/ Not Active
        </div>

        {/* Package Name Section */}
        <div className="flex p-4 items-center gap-2 border-b border-gray-100">
          <span className="bg-[#16537e] p-1 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 cursor-pointer w-5"
            >
              <path
                d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 00-.378.895 8.753 8.753 0 01-4.366 1.226 8.734 8.734 0 01-4.366-1.226 2.25 2.25 0 00-.378-.895l-.001-.144c0-.53.11-.999.35-1.453l.001-.003a10.875 10.875 0 016.718 0l.001.003c.239.454.35.923.35 1.453z"
              />
            </svg>
          </span>
          Package Name: Plan 1, Plan 2 / No Package Active
        </div>

        {/*  */}

        <div class="flex p-4 items-center gap-2 border-b border-gray-100"><span class="bg-[#16537e] p-1 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 cursor-pointer w-5 ">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z">
          </path>
        </svg></span> Refer Code: alexkhan</div>


        <div class="flex p-4 items-center gap-2 border-b border-gray-100"><span class="bg-[#16537e] p-1 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 cursor-pointer w-5 ">
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
          </path>
        </svg></span> Total Refer: 0</div>

        <div class="flex p-4 items-center gap-2 border-b border-gray-100"><span class="bg-[#16537e] p-1 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 cursor-pointer w-5 ">
          <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z">
          </path>
        </svg></span> Task: 0</div>
      </div>
    </div>
  );
};

export default Profile;
