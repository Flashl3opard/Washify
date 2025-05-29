"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";

const PaymentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [price, setPrice] = useState("0.00");

  useEffect(() => {
    const priceFromRoute = searchParams.get("price");
    if (priceFromRoute) setPrice(priceFromRoute);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !address) return alert("Please fill in all details.");

    console.log({ fullName, address, paymentMode, price });
    router.push("/success"); // or trigger Razorpay checkout here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Navbar />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-cyan-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
            <span className="bg-cyan-100 text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              3
            </span>
            Enter Delivery & Payment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Mode
              </label>
              <select
                className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="UPI">UPI</option>
                <option value="Card">Credit/Debit Card</option>
                <option value="Wallet">Wallet</option>
                <option value="COD">Cash on Pickup</option>
              </select>
            </div>

            <div className="flex justify-between items-center bg-cyan-50 border border-cyan-100 px-4 py-3 rounded-md">
              <span className="text-gray-700 font-medium">
                Estimated Price:
              </span>
              <span className="text-lg font-semibold text-cyan-700">
                ₹{price}
              </span>
            </div>

            <Button className="w-full mt-4" type="submit">
              Proceed to Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
