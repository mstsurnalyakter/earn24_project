import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Body from './components/Body';
import WorkPage from './Pages/WorkPage';
import DepositePage from './Pages/DepositePage';
import Withdraw from './Pages/Withdraw';
import Profile from './Pages/Profile';
import Refer from './Pages/Refer';
import Transaction from  './Pages/Transaction';
import ManualDeposit from './Pages/ManualDeposit';
import DepositHistory from './Pages/DepositHistory';
import LoginForm from './Pages/LoginForm';
import RegisterForm from './Pages/RegisterForm';
import AllPackage from './Pages/AllPackage';
import ChangePassword from './Pages/ChangePassword';
import Dashboard from './Layout/Dashboard';
import Users from './Pages/dashboard/Users';
import AuthProvider from './providers/AuthProvider';
import Deposits from './Pages/dashboard/Deposits';
import Withdraws from './Pages/dashboard/Withdraws';

const router = createBrowserRouter([
{
  path:"/", element:<Layout></Layout> ,
  children: [
    { path: "/", element: <Body /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/register", element: <RegisterForm /> },
    { path: "/work", element: <WorkPage /> },  
    { path: "/deposit", element: <DepositePage /> }, 
    { path: "/Withdraw", element: <Withdraw /> },  
    {path:"/package", element:<AllPackage />},
    {path:"/profile", element: <Profile /> },
    {path:"/refer", element: <Refer /> },
    {path:"/change-password", element: <ChangePassword /> },
    {path:"/transaction", element: <Transaction /> },
    {path:"/manualdeposit", element: <ManualDeposit /> },
    {path:"/deposithistory", element: <DepositHistory /> },

    
    // { path: "/package", element: <Package },  
  ]
},
// dashboard route
{
  path: "dashboard",
  element: (
      <Dashboard />
  ),
  children: [
    {
      index: true,
      element:<Users/>
    },
    {
      path: "deposits",
      element: <Deposits />,
    },
    {
      path: "withdraw",
      element: <Withdraws />,
    }
  ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
