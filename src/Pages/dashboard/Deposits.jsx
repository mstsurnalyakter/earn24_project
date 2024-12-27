import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await axios.get(' https://api.earn24.trodad.xyz/api/deposits');
        setDeposits(response.data.deposits);
      } catch (error) {
        setError('Failed to fetch deposits');
        console.log(error);
      }
    };

    fetchDeposits();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(` https://api.earn24.trodad.xyz/api/deposits/${id}/status`, { status });
      setDeposits((prevDeposits) =>
        prevDeposits.map((deposit) =>
          deposit.id === id ? { ...deposit, status } : deposit
        )
      );
    } catch (error) {
      setError('Failed to update deposit status');
      console.log(error)
    }
  };

  console.log(deposits)
  return (
    <div className="min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-semibold mb-6">Deposit Information</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Payment Method</th>
              <th className="py-3 px-4 text-left">Payment Number</th>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">Payment Number</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
           deposits?.length > 0 && deposits?.map((deposit) => (
              <tr key={deposit.id}>
                <td className="py-3 px-4">{deposit.amount}</td>
                <td className="py-3 px-4">{deposit.paymentMethod}</td>
                <td className="py-3 px-4">{deposit.paymentNumber}</td>
                <td className="py-3 px-4">{deposit.transactionId}</td>
                <td className="py-3 px-4">{deposit.paymentNumber}</td>
                <td className="py-3 px-4">
                  <button className={
                  deposit.status === 'approved'
                    ? 'bg-green-100 text-green-800 x-5 py-2 rounded '
                    : deposit.status === 'rejected'
                    ? 'bg-red-100 text-red-800 x-5 py-2 rounded '
                    : 'bg-yellow-100 text-yellow-800 x-5 py-2 rounded '
                }>
                    {deposit.status}
                </button>
                
                  </td>
                <td className="py-3 px-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => updateStatus(deposit.id, 'approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => updateStatus(deposit.id, 'rejected')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deposits;