import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePaymentResponse = () => {
      // استخراج المعلمات المهمة من URL
      const success = searchParams.get("success");
      const txnResponseCode = searchParams.get("txn_response_code");
      const dataMessage = searchParams.get("data.message");
      const errorOccurred = searchParams.get("error_occured");
      const orderId = searchParams.get("order");

      // التحقق من نجاح عملية الدفع
      if (
        success === "true" &&
        (txnResponseCode === "APPROVED" || txnResponseCode === "00") &&
        dataMessage === "Approved" &&
        errorOccurred === "false"
      ) {
        try {
          // حفظ معلومات الطلب إذا كنت تريد
          const orderDetails = {
            orderId: orderId,
            amount: searchParams.get("amount_cents"),
            currency: searchParams.get("currency"),
            paymentId: searchParams.get("id"),
            createdAt: searchParams.get("created_at"),
            paymentMethod: {
              type: searchParams.get("source_data.type"),
              subType: searchParams.get("source_data.sub_type"),
            },
          };

          // حفظ تفاصيل الطلب في localStorage إذا كنت تريد
          localStorage.setItem(
            "lastSuccessfulOrder",
            JSON.stringify(orderDetails)
          );

          // مسح بيانات السلة
          localStorage.removeItem("cartData");

          // تحديث حالة Redux
          dispatch({
            type: "cartSlice/clearCart",
          });

          // توجيه المستخدم إلى صفحة النجاح
          navigate("/payment-success", {
            state: { orderDetails },
          });
        } catch (error) {
          console.error("Error handling successful payment:", error);
          navigate("/payment-failed");
        }
      } else {
        // في حالة الفشل
        navigate("/payment-failed", {
          state: {
            error: dataMessage || "Payment processing failed",
          },
        });
      }
    };

    handlePaymentResponse();
  }, [searchParams, navigate, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">
          Processing your payment...
        </h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Please do not close this window.</p>
      </div>
    </div>
  );
};

export default PaymentCallback;
