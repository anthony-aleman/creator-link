import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [role, setRole] = useState<"creator" | "brand">("creator");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>

        {/* Toggle Role Selector */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRole("creator")}
            className={`w-1/2 py-2 rounded-md border text-sm font-medium transition ${
              role === "creator"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            I’m a Creator
          </button>
          <button
            onClick={() => setRole("brand")}
            className={`w-1/2 py-2 rounded-md border text-sm font-medium transition ${
              role === "brand"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            I’m a Brand
          </button>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-4">
          <input type="hidden" name="role" value={role} />

          <div>
            <label
              htmlFor={role === "creator" ? "name" : "company"}
              className="block text-sm font-medium text-gray-700"
            >
              {role === "creator" ? "Full Name" : "Company Name"}
            </label>
            <input
              type="text"
              id={role === "creator" ? "name" : "company"}
              name={role === "creator" ? "name" : "company"}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Sign Up as {role === "creator" ? "Creator" : "Brand"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </main>
  );
}
