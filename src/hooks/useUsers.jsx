import axios from "axios";
import { useEffect, useState } from "react";


const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(' https://api.earn24.trodad.xyz/api/admin');
            console.log(response.data.users)
            setUsers(response.data.users);
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

    return { users, error };
}

export default useUsers
