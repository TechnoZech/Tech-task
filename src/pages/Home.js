import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <NavLink to="/register/customer" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
                    Customer Registration
                </NavLink>
                <NavLink to="/register/admin" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
                    Admin Registration
                </NavLink>
                <NavLink to="/login/admin" className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition">
                    Admin Login
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
