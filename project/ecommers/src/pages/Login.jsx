import React from "react";

const Login = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-10  flex justify-center items-center mt-20">
            <div className="bg-white w-full max-w-lg mx-4 p-8  rounded-lg shadow-lg relative">
                <button className="absolute top-4 right-4 text-black text-2xl font-bold">
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-6">Log in</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email *
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="mb-6">
                        <a href="#" className="text-sm text-gray-500 underline hover:text-lime-500">
                            Forgot your password?
                        </a>
                    </div>

                    <div className=" flex  gap-x-3 text justify-around">
                        <button className="btn btnDark px-10 h-12  w-52 text-lg bg-black text-white py-4 rounded font-semibold pl-20">
                            Login
                        </button>
                        {/* <button className='ml-auto w-4/6  bg-gray-800  text-white p-2 rounded font-semibold hover:bg-gray-900 mt-6' type="submit">Log In</button> */}


                        <div className="flex justify-between items-center underline gap-x-0 ">
                            <a href="#" className="text-sm text-gray-700  font-semibold hover:text-lime-500">New customer?
                            <a
                                href="#"
                                className="text-sm text-gray-700 font-semibold hover:text-lime-500"
                            >
                                Create your account
                               
                            </a></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;