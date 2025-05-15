import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try{
      const response= await axios.post("http://127.0.0.1:8888/users/insert" , formData);
      console.log("success" , response.data);
     
      if(response.data.token){
        localStorage.setItem('token' , response.data.token);
        setMessage("user successfully and token saved!");
      }
      else{
        setMessage("user failed , no token received.")
      }
      
    }
    catch(err){
      console.log("error",err);
      setMessage("An error occurred during registration.")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">UserName</label>
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
