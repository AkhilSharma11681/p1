"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [interest, setInterest] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-12 bg-white min-h-[80vh]">
      
      {/* Left Passage Text block */}
      <div className="flex-1 space-y-6 text-gray-800 text-sm md:text-base leading-relaxed text-left font-sans">
        <p className="font-bold text-xl text-gray-900 tracking-tight">
          Omegle V lets you meet random friends completely unfiltered.
        </p>
        <p>
          When you use Omegle V, we pick someone else at random so you can have a one-on-one text chat. 
          To help you find people who share your interests, you can add your topics below before starting.
        </p>
        <p className="text-xs text-gray-500 pt-4 border-t border-gray-100">
          You must be 18+ or have parental consent to use this app. Chat history is entirely peer-to-peer and never logged on servers.
        </p>
      </div>

      {/* Right Control Box Box info layout */}
      <div className="w-full md:w-[360px] bg-[#f7f7f7] border border-gray-200 p-6 rounded-lg space-y-6 shadow-sm">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block">
            Add Your Interests (Optional)
          </label>
          <input 
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g. gaming, anime, music"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
          />
        </div>

        {/* Start Chat Buttons */}
        <div className="space-y-3 pt-2">
          <button 
            type="button"
            onClick={() => router.push('/chat')}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md text-lg transition-all shadow-sm active:scale-[0.99]"
          >
            Start Text Chat
          </button>
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-center">
            <span className="text-xs font-bold text-amber-800 block">⭐ PREMIUM FILTER ACTIVE</span>
            <span className="text-[11px] text-gray-600 mt-1 block">
              Gender & Country Filters unlocking at 50k traffic logs.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}