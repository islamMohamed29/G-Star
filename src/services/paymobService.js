export class PayMobService {
  constructor() {
    this.apiKey = import.meta.env.VITE_PAYMOB_API_KEY;
    this.baseUrl = "https://accept.paymob.com/api";
    this.integrationId = import.meta.env.VITE_PAYMOB_INTEGRATION_ID;
    this.frameId = import.meta.env.VITE_PAYMOB_IFRAME_ID;
  }

  // Step 1: Authentication Request
  async authenticate() {
    console.log("API Key:", this.apiKey);
    console.log("Integration ID:", this.integrationId);
    console.log("Iframe ID:", this.frameId);
    try {
      const response = await fetch(`${this.baseUrl}/auth/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: this.apiKey,
        }),
      });
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  }

  // Step 2: Order Registration
  async registerOrder(authToken, amount, items) {
    try {
      const response = await fetch(`${this.baseUrl}/ecommerce/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_token: authToken,
          delivery_needed: false,
          amount_cents: amount * 100, // Convert to cents
          currency: "EGP",
          items: items,
        }),
      });
      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error("Order registration error:", error);
      throw error;
    }
  }

  // Step 3: Payment Key Request
  async getPaymentKey(authToken, orderId, amount, billingData) {
    try {
      console.log("IAmHERE");
      const response = await fetch(`${this.baseUrl}/acceptance/payment_keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_token: authToken,
          amount_cents: amount * 100,
          expiration: 3600,
          order_id: orderId,
          billing_data: billingData,
          currency: "EGP",
          integration_id: this.integrationId,
          lock_order_when_paid: true,
          success_url: "http://localhost:5173/payment-callback", // تم التحديث
          failure_url: "http://localhost:5173/payment-callback", // تم التحديث
        }),
      });
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.error("Payment key error:", error);
      throw error;
    }
  }

  // Helper method to format cart items for PayMob
  formatCartItems(cartData) {
    return cartData.map((item) => ({
      name: item.name,
      amount_cents: parseFloat(item.price) * 100,
      description: `${item.selectedSize} - ${item.selectedColor}`,
      quantity: item.quantity,
    }));
  }

  // Helper method to create billing data
  createBillingData(userInfo) {
    return {
      apartment: "NA",
      email: userInfo.email,
      floor: "NA",
      first_name: userInfo.firstName,
      street: userInfo.street,
      building: "NA",
      phone_number: userInfo.phone,
      shipping_method: "NA",
      postal_code: userInfo.postalCode,
      city: userInfo.city,
      country: userInfo.country,
      last_name: userInfo.lastName,
      state: userInfo.state,
    };
  }
}

export const paymobService = new PayMobService();
