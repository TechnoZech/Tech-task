import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { registerUser } from "../api/authApi";

const CustomerRegister = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ ...formData, role: "customer" });
            toast.success(response.message || "Registration Successful! Check email.");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold">Customer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
            </form>
        </div>
    );
};

export default CustomerRegister;
