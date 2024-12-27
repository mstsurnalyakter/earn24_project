import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const DepositePage = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);


  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleAmountSubmit = (input) => {
    const validAmount = parseInt(input, 10);
    if (validAmount >= 500 && validAmount <= 25000) {
      setAmount(validAmount);
      setErrorMessage(""); // Clear error when valid amount is entered
    } else {
      setErrorMessage("Please enter an amount between 500 and 25000.");
    }
  };

  const handlePresetClick = (presetAmount) => {
    setAmount(parseInt(presetAmount, 10));
    setErrorMessage(""); // Clear error when valid preset is selected
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setErrorMessage(""); // Clear error when payment method is selected
  };

  // Check if the "Next" button should be enabled based on the inputs
  useEffect(() => {
    if (amount < 500 || amount > 25000 || !paymentMethod) {
      setIsNextEnabled(false);
      setErrorMessage("Please enter a valid amount and select a payment method.");
    } else {
      setIsNextEnabled(true);
      setErrorMessage(""); // Clear error when everything is valid
    }
  }, [amount, paymentMethod]);



  const handleNextClick = () => {
    if (isNextEnabled) {
      navigate("/manualdeposit", { state: { paymentMethod, amount } });
    }
  };

  return (
    <>
      <div className="text-white bg-gray-600 ">
        <div className=" text-center p-6">
          <p>Minimum Deposit 500 tk.</p>
        </div>
        <div className="text-center p-6">
          <p>Your Current Balance :</p>
        </div>
        <div>
          {/* Enter Amount */}
          <div className="border-solid border-8 border-gray-900  text-center p-6 rounded-lg shadow-md">
            <h1 className="text-2xl mb-4 font-semibold ">Enter Amount</h1>
            <div className="join">
              <div className="flex">
                <input
                  className="bg-gray-600 text-white font-bold text-center input input-bordered border-teal-500 join-item flex-1 p-2 text-lg border rounded-full"
                  placeholder="Enter amount"
                  type="number"
                  id="amountInput"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {/* <button
                  className="btn join-item rounded-r-full bg-indigo-600 hover:bg-indigo-700 text-black"
                  onClick={() => handleAmountSubmit(amount)}
                >
                  Submit
                </button> */}
              </div>
            </div>

            <div className="flex justify-around mt-6 flex-wrap gap-2">
              {["500", "1000", "2000", "5000", "10000", "25000"].map((preset) => (
                <button
                  key={preset}
                  className={`btn btn-sm px-6 py-2 ${amount === parseInt(preset) ? "bg-indigo-600 text-white" : "bg-gray-100 hover:bg-indigo-600 hover:text-white"
                    } rounded-md`}
                  onClick={() => handlePresetClick(preset)}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Select Payment Method */}
          <div className="border border-4 text-center p-6 mt-6 bg-gray-800">
            <h1 className='text-2xl'>Select Payment Method</h1>
            <div className="flex justify-evenly mt-4">
              <img
                className={`w-40 h-20 cursor-pointer ${paymentMethod === "Bkash" ? "border-4 rounded-xl	 border-white bg-gray-50" : ""
                  }`}
                src="bkash.png"
                alt="Bkash"
                onClick={() => handlePaymentMethodSelect("Bkash")}
              />
              <img
                className={`w-40 h-20 cursor-pointer ${paymentMethod === "Nagad" ? "border-4 rounded-xl	border-white bg-gray-50" : ""
                  }`}
                src="nagad.png"
                alt="Nagad"
                onClick={() => handlePaymentMethodSelect("Nagad")}
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}

          {/* Next Button */}
          <div className="sticky bottom-0 w-full p-6 z-10">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleNextClick}
                className={`btn btn-neutral  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out  ${!isNextEnabled && 'opacity-50 cursor-not-allowed'}`}
                disabled={!isNextEnabled}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositePage;
