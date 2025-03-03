import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyEmail = () => {
    const { token } = useParams(); // Get token from URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const verifyUserEmail = async () => {
            try {
                const response = await axios.get(`/verify-email/${token}`);
                toast.success(response.data.message);
                setMessage("Email verified successfully! Redirecting...");
                setTimeout(() => navigate("/login"), 3000); // Redirect after 3 sec
            } catch (error) {
                toast.error(error.response?.data?.message || "Invalid or expired token.");
                setMessage("Email verification failed.");
            } finally {
                setLoading(false);
            }
        };

        verifyUserEmail();
    }, [token, navigate]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
                <h2 className="text-xl font-bold text-gray-800">
                    {loading ? "Verifying Email..." : message}
                </h2>
                {loading && <p className="text-gray-500 mt-2">Please wait...</p>}
            </div>
        </div>
    );
};

export default VerifyEmail;
