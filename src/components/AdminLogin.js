import { useState } from "react";
import { toast } from "react-toastify";
import { loginAdmin } from "../api/authApi";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAdmin(formData);
            if (response.role !== "admin") {
                toast.error("You are not allowed to login from here");
                return;
            }
            toast.success("Admin Login Successful!");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
