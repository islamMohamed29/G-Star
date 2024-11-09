import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const success = searchParams.get("success");
    const txn_response_code = searchParams.get("txn_response_code");

    // Check if payment was successful
    if (success === "true" && txn_response_code === "0") {
      // Clear cart data from localStorage
      localStorage.removeItem("cartData");

      // Clear cart state in Redux
      dispatch({ type: "cartSlice/clearCart" });

      // Redirect to success page
      navigate("/payment-success");
    } else {
      // Redirect to failure page
      navigate("/payment-failed");
    }
  }, [searchParams, navigate, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Processing your payment...
        </h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
};

export default PaymentCallback;
