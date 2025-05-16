"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function WashifyPage() {
  const router = useRouter();

  const [items, setItems] = useState([
    { id: 1, name: "T-shirt", count: 0, price: 15, image: "/tshirt.png" },
    { id: 2, name: "Shirt", count: 0, price: 20, image: "/shirt.png" },
    { id: 3, name: "Pants", count: 0, price: 20, image: "/pants.png" },
    { id: 4, name: "Trousers", count: 0, price: 25, image: "/trousers.png" },
    { id: 5, name: "Kurta", count: 0, price: 20, image: "/kurta.png" },
    { id: 6, name: "Saree", count: 0, price: 50, image: "/saree.png" },
    { id: 7, name: "Jacket", count: 0, price: 80, image: "/jacket.png" },
    { id: 8, name: "Blanket", count: 0, price: 150, image: "/towel.png" },
    { id: 9, name: "Towel", count: 0, price: 150, image: "/towels.png" },
    { id: 10, name: "Bedsheets", count: 0, price: 150, image: "/bedcover.png" },
    {
      id: 11,
      name: "Pillow Covers",
      count: 0,
      price: 150,
      image: "/pillows.png",
    },
    { id: 12, name: "Shoes", count: 0, price: 150, image: "/shoes.png" },
  ]);

  const handleIncrement = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items
    .reduce((sum, item) => sum + item.count * item.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-cyan-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
            <span className="bg-cyan-100 text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              1
            </span>
            Select Your Items
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg border ${
                  item.count > 0
                    ? "border-cyan-300 bg-cyan-50"
                    : "border-gray-200"
                } p-4 transition-all hover:shadow-md`}
              >
                <div className="flex justify-center mb-3">
                  <div className="relative w-20 h-20 bg-white rounded-full p-2 border border-gray-100 shadow-sm">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    {item.count > 0 && (
                      <div className="absolute -top-2 -right-2 bg-cyan-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                        {item.count}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center mb-3">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-cyan-600 font-medium">
                    ₹{item.price.toFixed(2)}/item
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      item.count > 0
                        ? "bg-cyan-200 text-cyan-700"
                        : "bg-gray-100 text-gray-400"
                    } hover:bg-cyan-300 transition-colors`}
                    disabled={item.count === 0}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-8 text-center font-medium">
                    {item.count}
                  </span>

                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
                    aria-label={`Add ${item.name}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl shadow-lg p-6 mb-6 text-white">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-white text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              2
            </span>
            Order Summary
          </h2>

          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Total Items:</span>
              <span className="font-bold">{totalItems}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/30">
              <span className="font-medium">Estimated Price:</span>
              <span className="font-bold text-xl">₹{totalPrice}</span>
            </div>
          </div>

          <Button
            className="w-full py-4 bg-white hover:bg-cyan-50 text-cyan-700 font-medium rounded-lg flex items-center justify-center gap-2 transition-all"
            disabled={totalItems === 0}
            onClick={() => {
              if (totalItems > 0) {
                router.push("/centres");
              }
            }}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 ? "Confirm Laundry Order" : "Add items to continue"}
          </Button>

          {totalItems > 0 && (
            <p className="text-center text-cyan-100 text-sm mt-2 flex items-center justify-center">
              <Check className="w-4 h-4 mr-1" />
              Free pickup for orders over ₹150
            </p>
          )}
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Washify - Fresh & Clean Laundry Service</p>
        </div>
      </div>
    </div>
  );
}
