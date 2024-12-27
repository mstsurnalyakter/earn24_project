import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-white shadow-md">
          <div className="p-4 text-xl font-bold">Dashboard</div>
          <ul className="menu p-4">
            <li className="mb-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }
                end
              >
                <span className="ml-2">Home</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }
                end
              >
                <span className="ml-2">Users</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to={"/dashboard/deposits"}
                end
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }
                
              >
                <span className="ml-2">Deposits</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to={"/dashboard/withdraw"}
                end
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }
              >
                <span className="ml-2">Withdraw</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to={"/dashboard/refer"}
                className={({ isActive }) =>
                  `flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${
                    isActive ? "rounded-sm bg-gray-100" : ""
                  }`
                }
                end
              >
                <span className="ml-2">Refer</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
