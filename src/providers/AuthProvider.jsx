import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (name, phoneNumber, password) => {
        setLoading(true);
        try {
            const response = await axios.post(' https://api.earn24.trodad.xyz/api/signup', {
                name,
                phone: phoneNumber,
                password,
            });
           console.log(response.data);
           console.log(response)
           
            return response;
        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (phoneNumber, password) => {
        setLoading(true);
        try {
            const response = await axios.post(' https://api.earn24.trodad.xyz/api/login', {
                phone: phoneNumber,
                password,
            });
            setUser(response.data.user);
            console.log(response.data.user);
            return response;
            // setUser({ email: response.data.email });
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setLoading(false);
        }
    };


    const authInfo={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        login,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider
