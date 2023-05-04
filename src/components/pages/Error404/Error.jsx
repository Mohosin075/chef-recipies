/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate= useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <button onClick={handleGoBack} className="btn btn-error ">Go Back</button>
          </div>
          <div className="mt-4">
            <img
              src="https://i.pinimg.com/474x/da/49/c0/da49c06c9a519cb11f2130ae63f62719.jpg"
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
