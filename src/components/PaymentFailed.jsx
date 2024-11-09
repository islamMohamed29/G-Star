import React from "react";
import { useLocation, Link } from "react-router-dom";

const PaymentFailed = () => {
  const location = useLocation();
  const error =
    location.state?.error || "An error occurred during payment processing";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>

          <div className="space-y-4">
            <Link
              to="/checkout"
              className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Try Again
            </Link>
            <Link
              to="/shop"
              className="block w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition"
            >
              Return to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
