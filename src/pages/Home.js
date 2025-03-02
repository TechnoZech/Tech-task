import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">Welcome to Our App</h1>
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/customer-register"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-white ${isActive ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`
          }
        >
          Customer Register
        </NavLink>
        <NavLink
          to="/admin-register"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-white ${isActive ? "bg-green-700" : "bg-green-500 hover:bg-green-600"}`
          }
        >
          Admin Register
        </NavLink>
        <NavLink
          to="/admin-login"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-white ${isActive ? "bg-red-700" : "bg-red-500 hover:bg-red-600"}`
          }
        >
          Admin Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
