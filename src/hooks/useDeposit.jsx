import axios from "axios";
import { useEffect, useState } from "react";


const useDeposit = () => {
    const [deposits, setDeposits] = useState([]);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(' https://api.earn24.trodad.xyz/api/deposits');
            console.log(response.data.deposits)
            setDeposits(response.data.deposits);
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

    return { deposits, error };
}

export default useDeposit
