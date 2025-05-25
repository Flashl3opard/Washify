"use client";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });

    const data = await res.json();
    setPending(false);

    if (!res.ok) {
      console.error(data.message);
    } else {
      console.log("Logged in successfully");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 translate-x-3">
          Washify🫧
        </h1>

        <h2 className="text-md font-semibold text-center p-3">
          Login to your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Email"
              disabled={pending}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              disabled={pending}
              required
            />
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {pending ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <a href="/signup" className="text-blue-500 hover:underline m-2">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
