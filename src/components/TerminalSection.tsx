import React, { useState, useEffect } from 'react';

export function TerminalSection() {
  const [currentText, setCurrentText] = useState('');
  const fullText = '$ DevOps Engineer | Terraform | AKS | Azure |';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300 text-sm ml-4">terminal</span>
          </div>
          <div className="p-6 font-mono">
            <div className="text-cyan-400 text-lg">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}