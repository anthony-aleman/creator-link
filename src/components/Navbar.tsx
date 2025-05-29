import Button from "./Button";
import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="p-3">ContentLink</Link>
            <div className="space-x-6">
                <Link href="/login" className="p-4 focus:border-sky-500 border-b-double rounded-xl shadow-sm hover:bg-red-400 ">Login</Link>
                <Link href="/signup" className="p-4 focus:border-sky-500 border-b-double rounded-xl shadow-sm hover:bg-red-400 ">Sign Up</Link>
            </div>
        </nav >);
}