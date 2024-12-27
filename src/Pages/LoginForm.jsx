import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import {  useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const { login} = useAuth();

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await login(phoneNumber, password);
        console.log(response)
        if (response.data) {
          setSuccess(response.data.user);
          setError('');
          // Handle successful login (e.g., store token, redirect)
          console.log('Login successful:', response.data.user);
          navigate('/'); 
        } else {
          setError(response.data.error);
          setSuccess('');
        }


      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          // Convert error object to string
          const errorMessage = typeof error.response.data.error === 'object'
            ? Object.values(error.response.data.error).join(', ')
            : error.response.data.error;
          setError(errorMessage);
        } else {
          setError('Login failed. Please try again.');
        }
        setSuccess('');
      }
    }
  };

  // Validate the phone number and password
  const validateForm = () => {
    if (!phoneNumber || !password) {
      setError('Both fields are required.');
      return false;
    }
    // Phone number validation: must be 11 digits and start with 0
    if (!/^(0\d{10})$/.test(phoneNumber)) {
      setError('Phone number must be 11 digits and start with 0.');
      return false;
    }
    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className="text-white min-h-screen bg-gray-800 flex justify-center items-center py-10">
      <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-sm text-center mb-4">{success}</div>} {/* New line */}

        <form onSubmit={handleSubmit}>
          {/* Phone Number Input */}
          <div className="mb-4 text-white">
            <label className="block text-sm font-medium" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="bg-gray-700 mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-green-600">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;