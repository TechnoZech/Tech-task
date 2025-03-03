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
			toast.success(
				response.message || "Registration Successful! Check email."
			);
		} catch (error) {
			toast.error(error);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10">
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800">
                Customer Registration
				</h2>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						placeholder="Enter First Name"
						onChange={handleChange}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						placeholder="Enter Last Name"
						onChange={handleChange}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						name="email"
						placeholder="Enter Email"
						onChange={handleChange}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						onChange={handleChange}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default CustomerRegister;
