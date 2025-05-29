"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const centre = searchParams.get("centre");

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>

      <p className="mb-4">
        Laundry Facility: <strong>{centre || "Not selected"}</strong>
      </p>

      <p className="mb-8 text-xl">
        Total amount to pay: <strong>₹{total || "0.00"}</strong>
      </p>

      {/* Your payment form or integration here */}

      <button
        className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700"
        onClick={() => alert("Payment process started")}
      >
        Pay Now
      </button>
    </div>
  );
}
