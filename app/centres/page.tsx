"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CentresPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const total = searchParams.get("total");

  const [selectedCentre, setSelectedCentre] = useState<string | null>(null);

  // Example laundry centres
  const centres = [
    { id: "sparkle", name: "SparkleWash Premium" },
    { id: "ecoclean", name: "EcoClean Laundromat" },
  ];

  const handleConfirm = () => {
    if (selectedCentre && total) {
      router.push(`/payment?total=${total}&centre=${selectedCentre}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Select Laundry Facility</h1>

      <ul className="space-y-4 mb-6">
        {centres.map((centre) => (
          <li key={centre.id}>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="centre"
                value={centre.id}
                checked={selectedCentre === centre.id}
                onChange={() => setSelectedCentre(centre.id)}
                className="w-5 h-5 text-cyan-600"
              />
              <span className="text-lg">{centre.name}</span>
            </label>
          </li>
        ))}
      </ul>

      <Button
        disabled={!selectedCentre}
        onClick={handleConfirm}
        className="w-full bg-cyan-600 text-white py-3 rounded-lg"
      >
        Confirm Facility & Proceed to Payment
      </Button>

      <p className="mt-4 text-gray-600">
        Total Amount: <strong>₹{total || "0.00"}</strong>
      </p>
    </div>
  );
}
