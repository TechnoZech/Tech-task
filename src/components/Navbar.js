import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My App</h1>
                <div className="space-x-4">
                    <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
                    <NavLink to="/register/customer" className="hover:text-gray-300">Customer Register</NavLink>
                    <NavLink to="/register/admin" className="hover:text-gray-300">Admin Register</NavLink>
                    <NavLink to="/login/admin" className="hover:text-gray-300">Admin Login</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
