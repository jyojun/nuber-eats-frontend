import React from "react";

export const Login = () => {
    return <div className = "h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-white w-full max-w-lg pt-5 pb-7 rounded-lg text-center text-center>">
            <h3 className="text-3xl text-gray-800">Log In</h3>
            <form className="flex flex-col mt-5 px-5">
                <input placeholder ="Email" className="input mb-3"/>
                <input placeholder ="passworld " className="input" />
                <button className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90">
                    Log In
                </button>
            </form>
        </div>
    </div>;
};