"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
  });
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setPending(false);

    if (!res.ok) {
      console.log(data.message);
    } else {
      console.log("User registered successfully");
      router.push("/login");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 translate-x-3">
          Washify🫧
        </h1>

        <h2 className="text-md font-semibold text-center p-3">
          Create your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first"
                value={form.first}
                disabled={pending}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last"
                disabled={pending}
                value={form.last}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              disabled={pending}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="pass"
              value={form.pass}
              disabled={pending}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {pending ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <a href="/login" className="text-blue-500 hover:underline m-2">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
