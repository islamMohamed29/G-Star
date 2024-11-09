import React from "react";
import { useLocation, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase.</p>

          {orderDetails && (
            <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Order Details:</h3>
              <p>Order ID: {orderDetails.orderId}</p>
              <p>
                Amount: {(orderDetails.amount / 100).toFixed(2)}{" "}
                {orderDetails.currency}
              </p>
              <p>Payment Method: {orderDetails.paymentMethod.subType}</p>
            </div>
          )}

          <div className="space-y-4">
            <Link
              to="/shop"
              className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Continue Shopping
            </Link>
            <Link
              to="/orders"
              className="block w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
