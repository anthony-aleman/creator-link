import Link from "next/link";
import Button from "@/components/Button";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {/* OAuth Login */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => console.log("TODO: signIn('google')")}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 px-4 py-2 rounded-md  bg-gray-100 text-gray-800 text-black font-medium shadow-sm hover:bg-gray-300 transition"
          >
            <FaGoogle className="text-red-500" />
            Sign in with Google
          </button>

          <button
            onClick={() => console.log("TODO: signIn('facebook')")}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 px-4 py-2 bg-[#1877F2] rounded-md text-white font-medium shadow-sm hover:bg-gray-300 transition"
          >
            <span className="bg-white rounded-full p-1">
  <FaFacebookF className="text-[#1877F2]" />
</span>
            Sign in with Facebook
          </button>
        </div>

        <div className="relative mb-6">
          <hr className="border-gray-300" />
          <span className="absolute bg-white px-2 text-sm text-gray-500 -top-2 left-1/2 transform -translate-x-1/2">
            or sign in with email
          </span>
        </div>

        {/* Email/Password Login */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-gray-300 transition">Sign In</button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </main>
  );
}
