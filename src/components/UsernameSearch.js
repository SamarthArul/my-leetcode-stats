'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UsernameSearch({ defaultUsername }) {
  const [username, setUsername] = useState(defaultUsername || '');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // Navigate to the same page with a query parameter
      router.push(`/?username=${encodeURIComponent(username.trim())}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4.5a5.5 5.5 0 1 1-5.5 5.5 5.5 5.5 0 0 1 5.5-5.5ZM19 19l-4-4"/>
            </svg>
          </div>
          <input
            type="text"
            className="bg-gray-800 border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5"
            placeholder="Enter LeetCode username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-700 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
        >
          <span>Search</span>
        </button>
      </form>
    </div>
  );
} 