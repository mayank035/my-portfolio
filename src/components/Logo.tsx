import React from 'react';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-cyan-400 via-purple-500 to-yellow-400 rounded-lg font-bold text-white shadow-lg`}>
      <span className="text-lg">MS</span>
    </div>
  );
}