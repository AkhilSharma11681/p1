"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Omegle V Logo */}
      <div 
        onClick={() => router.push("/")}
        className="cursor-pointer flex items-center gap-1 text-3xl font-extrabold tracking-tight select-none"
      >
        <span className="text-blue-600">Omegle</span>
        <span className="text-orange-500 font-light text-2xl">V</span>
      </div>
      
      {/* Slogan */}
      <div className="text-gray-500 font-medium text-sm md:text-base text-center sm:text-right italic">
        Talk to strangers! The legal alternative.
      </div>
    </nav>
  );
}