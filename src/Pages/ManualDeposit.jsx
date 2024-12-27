// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import axios from "axios";

// const ManualDeposit = () => {
//   const { user } = useAuth();
//   const [paymentNumber, setPaymentNumber] = useState("");
//   const [transactionId, setTransactionId] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const location = useLocation();
//   const { paymentMethod, amount } = location.state || {}; //get payment method from state
//   const [copied, setCopied] = useState(null);
//   const handleCopy = (text, type) => {
//     navigator.clipboard.writeText(text);
//     // e.preventDefault(); // Prevents navigation since it's an anchor tag
//     setCopied(type);
//     setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(" https://api.earn24.trodad.xyz/api/add-deposit", {
//         amount,
//         user_id: user.id,
//         transaction_id: transactionId,
//         paymentMethod,
//         paymentNumber,
//       });
//       if (response.status === 201) {
//         setSuccess("Deposit has been added successfully");
//         setError("");
//       } else {
//         setError("Failed to add deposit");
//         setSuccess("");
//       }
//     } catch (error) {
//     //   if (
//     //     error.response &&
//     //     error.response.data &&
//     //     error.response.data.message
//     //   ) {
//     //     setError(error.response.data.message);
//     //   } else {
//     //     setError("Failed to add deposit. Please try again.");
//     //   }
//     //   setSuccess("");
//     console.error(error.response); // Log the entire error response
//     if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//     } else {
//         setError("Failed to add deposit. Please try again.");
//     }
//     setSuccess("");
//     }
//   };

//   return (
//     <div className="text-white bg-slate-700 py-2">
//       <h1 className="text-2xl text-center"> Manual Deposit intruction</h1>
//       <div>
//         <div className="p-4 text-center">
//           <p>
//             You have selected <strong>{paymentMethod}</strong> for depositing{" "}
//             <strong>{amount} tk</strong>.
//           </p>
//         </div>
//         <div className="p-4 flex justify-evenly items-center">
//           <p className="flex items-center gap-2">
//             {paymentMethod}{" "}
//             <span>{paymentMethod === "Bkash" ? "0174747474" : "01010101"}</span>
//             <button
//               className={`btn btn-sm ${
//                 copied === paymentMethod ? "bg-green-500 text-white" : ""
//               }`}
//               onClick={() =>
//                 handleCopy(
//                   paymentMethod === "Bkash" ? "0174747474" : "01010101",
//                   paymentMethod
//                 )
//               }
//             >
//               {copied === paymentMethod ? "Copied!" : "Copy"}
//             </button>
//           </p>
//         </div>
//         <div className="flex justify-center items-center ">
//           <img
//             className=" w-full md:max-w-[70%] bg-gray-800 mx-auto h-auto rounded-md shadow-md cursor-pointer"
//             src="send_money_img1.png"
//             alt="send_money_img"
//           />
//         </div>
//         {/* error and success message */}
//         {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}
//         {success && <div className="text-green-500 text-sm text-center mt-4">{success}</div>}

//         <div className="flex justify-center items-center text-white">
//           <div className="grid items-center rounded-lg shadow-lg p-8 lg:w-[50%] ">
//             <h1 className="text-xl text-error font-semibold mb-6">
//               Please Enter Your ({paymentMethod}) Information Properly
//             </h1>
//             {/* First Input Section */}
//             <div className="flex items-center gap-4 mb-6">
//               <button className="font-normal btn px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
//                 Enter {paymentMethod} Number
//               </button>
//               <input
//                 className="bg-gray-700 input input-bordered flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-indigo-600"
//                 placeholder={`Enter Your ${paymentMethod} Number`}
//                 type="number"
//                 id="paymentNumberInput"
//                 value={paymentNumber}
//                 onChange={(e) => setPaymentNumber(e.target.value)}
//               />
//             </div>

//             {/* Second Input Section */}
//             <div className="flex items-center gap-4">
//               <button className="font-normal	 btn px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
//                 {paymentMethod} Transaction ID
//               </button>
//               <input
//                 className="bg-gray-700 input input-bordered flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-indigo-600"
//                 placeholder={`Enter Your ${paymentMethod} Transaction ID`}
//                 type="text"
//                 id="transactionIdInput"
//                 value={transactionId}
//                 onChange={(e) => setTransactionId(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center pt-8">
//         <Link to="/deposithistory">
//           <button onClick={handleSubmit} className="btn btn-primary">Add Deposit</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ManualDeposit;

import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const ManualDeposit = () => {
  const { user } = useAuth();
  const [paymentNumber, setPaymentNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const { paymentMethod, amount } = location.state || {}; // Get payment method from state
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(' https://api.earn24.trodad.xyz/api/add-deposit', {
        amount: amount.toString(), // Ensure amount is a string
        userId:user?.id.toString() || "1", // Ensure user_id is a string
         transactionId,
        paymentMethod,
        paymentNumber,
      });
      if (response.status === 201) {
        setSuccess('Deposit has been added successfully');
        setError('');
        navigate('/deposithistory');
      } else {
        setError('Failed to add deposit');
        setSuccess('');
      }
    } catch (error) {
      console.error(error.response); // Log the entire error response
      if (error.response && error.response.data) {
        setError(JSON.stringify(error.response.data));
      } else {
        setError('Failed to add deposit. Please try again.');
      }
      setSuccess('');
    }
  };

  return (
    <div className="text-white bg-slate-700 py-2">
      <h1 className="text-2xl text-center">Manual Deposit Instruction</h1>
      <div>
        <div className="p-4 text-center">
          <p>
            You have selected <strong>{paymentMethod}</strong> for depositing <strong>{amount} tk</strong>.
          </p>
        </div>
        <div className="p-4 flex justify-evenly items-center">
          <p className="flex items-center gap-2">
            {paymentMethod} <span>{paymentMethod === "Bkash" ? "0174747474" : "01010101"}</span>
            <button
              className={`btn btn-sm ${copied === paymentMethod ? "bg-green-500 text-white" : ""}`}
              onClick={() =>
                handleCopy(paymentMethod === "Bkash" ? "0174747474" : "01010101", paymentMethod)
              }
            >
              {copied === paymentMethod ? "Copied!" : "Copy"}
            </button>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full md:max-w-[70%] bg-gray-800 mx-auto h-auto rounded-md shadow-md cursor-pointer"
            src="send_money_img1.png"
            alt="send_money_img"
          />
        </div>
        <div className="flex justify-center items-center text-white">
          <div className="grid items-center rounded-lg shadow-lg p-8 lg:w-[50%]">
            <h1 className="text-xl text-error font-semibold mb-6">
              Please Enter Your ({paymentMethod}) Information Properly
            </h1>
            {/* First Input Section */}
            <div className="flex items-center gap-4 mb-6">
              <button className="font-normal btn px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Enter {paymentMethod} Number
              </button>
              <input
                className="bg-gray-700 input input-bordered flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-indigo-600"
                placeholder={`Enter Your ${paymentMethod} Number`}
                type="number"
                id="paymentNumberInput"
                value={paymentNumber}
                onChange={(e) => setPaymentNumber(e.target.value)}
              />
            </div>
            {/* Second Input Section */}
            <div className="flex items-center gap-4">
              <button className="font-normal btn px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
                {paymentMethod} Transaction ID
              </button>
              <input
                className="bg-gray-700 input input-bordered flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-indigo-600"
                placeholder={`Enter Your ${paymentMethod} Transaction ID`}
                type="text"
                id="transactionIdInput"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Deposit
        </button>
      </div>
      {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}
      {success && <div className="text-green-500 text-sm text-center mt-4">{success}</div>}
    </div>
  );
};

export default ManualDeposit;
