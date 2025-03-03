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
		<div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
			<h2 className="text-2xl font-bold text-center text-gray-800">
				Login
			</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
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
					Login
				</button>
			</form>
		</div>
	);
};

export default AdminLogin;
