"use client"
import React, { useState } from 'react';

export default function EnrollID() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Enroll Id:', { id, password });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
        <h1 className="text-2xl font-bold text-center">পরীক্ষা দিন</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="number" className="text-sm font-bold text-gray-600 block">
              এনরোল আইডি
            </label>
            <input
              type="number"
              id="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="এনরোল আইডি নাম্বার দিন"
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
              সাবমিট
            </button>
          </div>
        </form>

        <p className="mt-4 text-center">
          আইডি নাম্বার নেই?{' '}
          <a href="/exams" className="text-blue-500 hover:underline">
            পরীক্ষাসমূহ
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}
