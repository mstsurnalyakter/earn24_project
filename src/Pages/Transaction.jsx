import React from 'react'

const Transaction = () => {
  return (
    <div className='text-white text-center'>
      <h1 className='text-4xl'>Transaction History</h1>



      <div className="overflow-x-auto text-white">
        <table className="table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>12/10/2024</td>
              <td>Withdraw</td>
              <td>Amount 500 tk</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>11/10/2024</td>
              <td>Withdraw</td>
              <td>Amount 1000 tk</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>10/10/2024</td>
              <td>Withdraw</td>
              <td>Amount 5000 tk</td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Transaction
