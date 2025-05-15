import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { data } = await axios.post("http://127.0.0.1:8888/users/login", { 
                email, 
                password 
            });
             console.log("success" , data);
             
            localStorage.setItem("token", data.token);
            alert("Login Successful");
            navigate("/"); // Redirect to homepage
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center mt-20">
            <div className="bg-white w-full max-w-lg mx-4 p-8 rounded-lg shadow-lg relative">
                
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-black text-2xl font-bold">
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-center sm:text-left">Login</h2>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password *</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-2 rounded-md"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
