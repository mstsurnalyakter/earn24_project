// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import useAuth from "../hooks/useAuth";

// const Navbar = ({ isLoggedIn, handleLogin, handleLogout }) => {
//   const { user } = useAuth();
//   console.log(user.role);
//   return (
//     <div className="mx-6 ">
//       <header className=" text-white text-xl p-4 flex justify-between items-center  rounded">
//         {/* Left: User Picture */}
//         <div className="border-yellow-300 border-2 w-10 h-10 rounded-full overflow-hidden">
//           <Link to="./profile">
//             <img
//               src="/user.png"
//               alt="User"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//               }}
//             />
//           </Link>
//         </div>
//         <h1 className="font-semibold	">Balance: 500 TK</h1>

//         {user && user?.role==='admin' ? (
//           <div>
//             <Link to="./">
//               <button>Home</button>
//             </Link>
//             <Link to="/dashboard">
//               <button>Dashboard</button>
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <Link to="./">
//               <button>Home</button>
//             </Link>
//           </div>
//         )}

        
//         {/* Right: Login/Logout Button */}
//         <div>
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to="/login">
//               <button
//                 onClick={handleLogin}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
//               >
//                 Login
//               </button>
//             </Link>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// };

// Navbar.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   handleLogin: PropTypes.func.isRequired,
//   handleLogout: PropTypes.func.isRequired,
// };

// export default Navbar;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const Navbar = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const { user } = useAuth();

  console.log(user?.role || "No role available");

  return (
    <div className="mx-6">
      <header className="text-white text-xl p-4 flex justify-between items-center rounded">
        {/* Left: User Picture */}
        <div className="border-yellow-300 border-2 w-10 h-10 rounded-full overflow-hidden">
          <Link to="./profile">
            <img
              src="/user.png"
              alt="User"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
        <h1 className="font-semibold">Balance: 500 TK</h1>

        {/* Conditional Rendering Based on User Role */}
        {user?.role === "admin" ? (
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }>Home</button>
            </Link>
            <Link to="/dashboard">
              <button className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }>Dashboard</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="./">
              <button>Home</button>
            </Link>
          </div>
        )}

        {/* Right: Login/Logout Button */}
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                onClick={handleLogin}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;
