"use client"
import React, { useState } from 'react';

export default function SignInForm() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign In:', { phone, password });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
        <h1 className="text-2xl font-bold text-center">সাইন ইন</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="number" className="text-sm font-bold text-gray-600 block">
              ফোন নাম্বার
            </label>
            <input
              type="number"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="ফোন নাম্বার দিন"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-bold text-gray-600 block">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="পাসওয়ার্ড দিন"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              সাইন ইন
            </button>
          </div>
        </form>

        <p className="mt-4 text-center">
          অ্যাকাউন্ট করা নেই?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            সাইন আপ
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}
