"use client"
import React, { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">FORGOT YOUR PASSWORD</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            NEW PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            id="passwordagain"
            name="passwordagain"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            CONFIRM PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
