import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useWithdraw = () => {
    const [withdraws, setWithdraws] = useState([]);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(' https://api.earn24.trodad.xyz/api/withdraws');
            console.log(response.data.withdraws)
            setWithdraws(response.data.withdraws);
            setError('');
          } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
              setError(error.response.data.error);
            } else {
              setError('Failed to fetch users. Please try again.');
            }
          }
        };
    
        fetchUsers();
      }, []);

    return { withdraws, error };
}

export default useWithdraw