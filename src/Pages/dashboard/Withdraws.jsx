
import useWithdraw from '../../hooks/useWithdraw';


const Withdraws = () => {
 const { withdraws, error } = useWithdraw();

  const formatDate = (date)=>{
    const options = {year:'numeric',month:'2-digit',day:'2-digit'};
    return new Date(date).toLocaleDateString('en-CA',options);
  }
  

  return (
    <div className="bg-gray-800 py-10 px-4 text-white">
    {/* Page Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">Withdraw History</h1>
      <p className="text-lg text-gray-600 mt-2">View your Withdraw transactions below</p>
    </div>

    {/* Deposit History Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-gray-700 rounded-lg shadow-md">
        <thead className=" ">
          <tr>
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Method</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {
          
          withdraws?.length >0 && withdraws?.map((withdraw) => (
            <tr key={withdraw?.id} className="border-t">
              <td className="py-3 px-4 ">{withdraw?.id}</td>
              <td className="py-3 px-4 ">{withdraw?.amount} TK</td>
              <td className="py-3 px-4 ">{withdraw?.paymentMethod}</td>
              <td className="py-3 px-4 ">{withdraw?.paymentNumber}</td>
              <td className="py-3 px-4 ">{formatDate(withdraw.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Back Button */}
    <div className="mt-8 text-center">
      <button className="btn btn-neutral" onClick={() => window.history.back()}>
        Back to Deposit Page
      </button>
    </div>
  </div>
  );
};

export default Withdraws;
