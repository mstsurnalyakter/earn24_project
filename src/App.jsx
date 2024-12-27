import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from "react";
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Company from "./components/Company";
import WorkPage from './Pages/WorkPage'; // Import your page components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/work" element={<WorkPage />} />
        {/* <Route path="/deposit" element={<DepositPage />} /> */}
        {/* <Route path="/withdraw" element={<WithdrawPage />} /> */}
        {/* Add the rest of the routes here */}
      </Routes>
    </Router>
  );
};
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     console.log("User logged in!");
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     console.log("User logged out!");
//   };

//   return (
//     <div>
//       <Navbar
//         isLoggedIn={isLoggedIn}
//         handleLogin={handleLogin}
//         handleLogout={handleLogout}
//       />
//       <Body></Body>
//       <Company></Company>
//     </div>
//   );
// };

export default App;
