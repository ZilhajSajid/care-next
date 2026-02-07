"use client";
import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-warning" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">404</h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">Something went Wrong</p>

        {/* Home Button */}
        <Link href="/">
          <button className="btn btn-primary gap-2">
            <FaHome />
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
