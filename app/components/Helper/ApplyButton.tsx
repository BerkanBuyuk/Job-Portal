"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyButton = () => {
  const applyHandler = () => {
    toast.success("Application Successful");
  };
  return (
    <div>
      <button
        onClick={applyHandler}
        className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-500 hover:bg-blue-900"
      >
        Apply Now
      </button>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ApplyButton;
