import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomerRegister from "./components/CustomerRegister";
import AdminRegister from "./components/AdminRegister";
import AdminLogin from "./components/AdminLogin";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
    return (
        <Router>
            <Navbar />
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/customer" element={<CustomerRegister />} />
                <Route path="/register/admin" element={<AdminRegister />} />
                <Route path="/login/admin" element={<AdminLogin />} />
                <Route path="/verify-email/:token" element={<VerifyEmail />} />
            </Routes>
        </Router>
    );
};

export default App;
