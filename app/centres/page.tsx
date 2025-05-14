"use client";

import { useState } from "react";
import { Clock, Star, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LaundryFacilities() {
  // Function to check if a facility is currently open
  const isCurrentlyOpen = (openTime: string, closeTime: string) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const [openHour, openMinute] = openTime.split(":").map(Number);
    const [closeHour, closeMinute] = closeTime.split(":").map(Number);

    const currentTimeValue = currentHour * 60 + currentMinute;
    const openTimeValue = openHour * 60 + openMinute;
    const closeTimeValue = closeHour * 60 + closeMinute;

    return (
      currentTimeValue >= openTimeValue && currentTimeValue < closeTimeValue
    );
  };

  const [facilities, setFacilities] = useState([
    {
      id: 1,
      name: "SparkleWash Premium",
      image: "/img1.jpg",
      address: "123 Main Street, Downtown",
      openTime: "07:00",
      closeTime: "22:00",
      rating: 4.8,
      reviewCount: 245,
      services: ["Wash & Fold", "Dry Cleaning", "Express Service"],
      isSelected: false,
    },
    {
      id: 2,
      name: "EcoClean Laundromat",
      image: "/img2.jpg",
      address: "456 Green Avenue, Westside",
      openTime: "06:00",
      closeTime: "23:00",
      rating: 4.5,
      reviewCount: 189,
      services: ["Eco-Friendly Washing", "Self-Service", "Pickup Available"],
      isSelected: false,
    },
    {
      id: 3,
      name: "Quick & Clean Express",
      image: "/img3.jpg",
      address: "789 Fast Lane, Northside",
      openTime: "08:00",
      closeTime: "20:00",
      rating: 4.2,
      reviewCount: 156,
      services: ["1-Hour Service", "Stain Removal", "Ironing"],
      isSelected: false,
    },
    {
      id: 4,
      name: "Luxury Laundry Lounge",
      image: "/img4.jpg",
      address: "101 Elite Street, Uptown",
      openTime: "09:00",
      closeTime: "21:00",
      rating: 4.9,
      reviewCount: 312,
      services: ["Premium Fabrics", "Coffee Bar", "Lounge Area"],
      isSelected: false,
    },
    {
      id: 5,
      name: "Budget Wash Center",
      image: "/img5.jpg",
      address: "202 Economy Road, Southside",
      openTime: "05:00",
      closeTime: "23:30",
      rating: 3.9,
      reviewCount: 98,
      services: ["Low-Cost Washing", "Bulk Discounts", "24/7 Dropbox"],
      isSelected: false,
    },
    {
      id: 6,
      name: "Campus Corner Laundry",
      image: "/img6.jpg",
      address: "303 University Blvd, College District",
      openTime: "07:30",
      closeTime: "23:00",
      rating: 4.3,
      reviewCount: 175,
      services: ["Student Discounts", "Study Tables", "Free Wi-Fi"],
      isSelected: false,
    },
  ]);

  const handleSelectFacility = (id: number) => {
    setFacilities(
      facilities.map((facility) => ({
        ...facility,
        isSelected: facility.id === id,
      }))
    );
  };

  const selectedCount = facilities.filter(
    (facility) => facility.isSelected
  ).length;

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <Star
            className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="">
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-cyan-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
            <span className="bg-cyan-100 text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              1
            </span>
            Select Laundry Facility
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((facility) => {
              const isOpen = isCurrentlyOpen(
                facility.openTime,
                facility.closeTime
              );

              return (
                <div
                  key={facility.id}
                  className={`rounded-lg border ${
                    facility.isSelected
                      ? "border-cyan-300 bg-cyan-50"
                      : "border-gray-200"
                  } p-4 transition-all hover:shadow-md`}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.name}
                        width={400}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                      <div
                        className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                          isOpen
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {isOpen ? "Open Now" : "Closed"}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {facility.name}
                      </h3>

                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{facility.address}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>
                          {facility.openTime} - {facility.closeTime}
                        </span>
                      </div>

                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {renderStars(facility.rating)}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {facility.rating}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          ({facility.reviewCount} reviews)
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {facility.services.map((service, index) => (
                            <span
                              key={index}
                              className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleSelectFacility(facility.id)}
                      className={`w-full ${
                        facility.isSelected
                          ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                          : "bg-white hover:bg-cyan-50 text-cyan-700 border border-cyan-200"
                      } font-medium rounded-lg transition-all`}
                    >
                      {facility.isSelected ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Selected
                        </>
                      ) : (
                        "Select This Facility"
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl shadow-lg p-6 mb-6 text-white">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-white text-cyan-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              2
            </span>
            Selected Facility
          </h2>

          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm mb-6">
            {selectedCount > 0 ? (
              <div>
                {facilities
                  .filter((facility) => facility.isSelected)
                  .map((facility) => (
                    <div key={facility.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-lg">
                          {facility.name}
                        </span>
                        <span className="text-sm bg-white/30 px-2 py-1 rounded">
                          {facility.openTime} - {facility.closeTime}
                        </span>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex mr-2">
                          {renderStars(facility.rating)}
                        </div>
                        <span className="text-sm">
                          {facility.rating} ({facility.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="text-sm mt-1">{facility.address}</div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-2">
                <p>No facility selected</p>
              </div>
            )}
          </div>

          <Button
            className="w-full py-4 bg-white hover:bg-cyan-50 text-cyan-700 font-medium rounded-lg flex items-center justify-center gap-2 transition-all"
            disabled={selectedCount === 0}
          >
            {selectedCount > 0 ? (
              <>
                Confirm Selection
                <Check className="w-5 h-5" />
              </>
            ) : (
              <>Select a facility to continue</>
            )}
          </Button>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Washify - Fresh & Clean Laundry Service</p>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
