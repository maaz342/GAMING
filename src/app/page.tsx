"use client"
import React, { useRef, useState,ChangeEvent } from 'react';
import Navbar from '../../components/Navbar';
import Signup from '../../components/Signup';
import Footer from '../../components/Footer';
import fortnite from '../../public/images/fortnite.jpeg'

const Home = () => {
  const scrollableRef = useRef(null); // Define the scrollableRef
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  


  return (
    <div className="dashboard-container bg-black">
      <Navbar />
      <div className="w-3/4 relative">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="w-1/4 absolute right-0 top-0">
        <div className="bg-gray-200 p-4">
          {/* Additional content goes here... */}
        </div>
        <div className="flex items-center justify-between">
        </div>
      </div>
      
      <div className="tabs-container">
        <div className="flex overflow-x-auto border space-x-40 mx-28  border-brown" ref={scrollableRef}>
        <div className="px-64 py-32 border-8 n mb-14 mt-14 mx-16 my-14 border-brown">Tab 1</div>
          <div className="px-64 py-32 border-8 mb-14 mt-14 mx-16 my-14 border-brown">Tab 2</div>
          <div className="px-64 py-32 border-8 mb-14 mt-14 mx-16 my-14 border-brown">Tab 3</div>
          <div className="px-64 py-32 border-8  mb-14 mt-14 mx-16 my-14 border-brown">Tab 4</div>
          <div className="px-64 py-32 border-8  mb-14 mt-14 mx-16 my-14 border-brown">Tab 5</div>
        </div>
        </div>
      <div className="flex overflow-x-auto border space-x-40 mx-28 my-28  border-brown" ref={scrollableRef}>
  <div className="px-64 py-32 border-8  mb-14 mx-14 my-14 border-brown">Tab 1</div>
  <div className="px-64 py-32 border-8  mb-14 mx-14 my-14 border-brown">Tab 2</div>
  <div className="px-64 py-32 border-8  mb-14 mx-14 my-14 border-brown">Tab 3</div>
  <div className="px-64 py-32 border-8 mb-14 mx-14 my-14 border-brown">Tab 4</div>
  <div className="px-64 py-32 border-8  mb-14 mx-16 my-14 border-brown">Tab 5</div>
</div>

    <div className="flex overflow-x-auto border  space-x-40 mx-28  my-28  border-brown" ref={scrollableRef}>
      

    <div className="px-64 py-32   mb-14 mx-16 my-14 border-8 border-brown">Tab 1</div>
          <div className="px-64 py-32 border-8  mb-14 mx-16 my-14 border-brown">Tab 2</div>
          <div className="px-64 py-32 border-8  mb-14 mx-16 my-14 border-brown">Tab 3</div>
          <div className="px-64 py-32 border-8  mb-14 mx-16 my-14 border-brown">Tab 4</div>
          <div className="px-64 py-32 border-8  mb-14 mx-16 my-14 border-brown">Tab 5</div>
    </div>

    <div className="flex  border  space-x-4 mx-28  border-brown">
        <div className="px-48 py-32 border-8 mb-14  mx-16 my-14 border-brown"></div>
          <div className="px-48 py-32 border-8  mb-14  mx-12 my-14 border-brown">Tab 2</div>
          
    </div>
    <Footer />
    </div>
   
     
  );
}; 

export default Home;
    </main>
  )
}
