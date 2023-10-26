"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

const Stake = () => {
    <Navbar />

  return (
    <div className="flex justify-center items-center h-screen">
  <div className="tabs-container mx-6"> {/* Add mx-6 class here */}
  <h1>HEADING</h1>
  <div className="h-12 w-auto border-8 border-red-500 mr-96"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero atque est officiis minus laudantium, dolore, velit officia enim harum ex reiciendis eum dignissimos expedita, deleniti non cupiditate minima explicabo nesciunt?</p>
    <div className="flex overflow-x-auto border space-x-10">
      <div className="h-12 w-96 border-8 border-red-500">Tab 1</div>
      <div className="h-12 w-96 border-8 border-red-500">Tab 2</div>
      <div className=" h-12 border-8 border-red-500"><button>SAMPLE</button></div>
    
    </div>
    <div className="flex overflow-x-auto  border space-x-10">
      <div className="h-12 w-96 border-8 border-red-500">Tab 1</div>
      <div className="h-12 w-96 border-8 border-red-500">Tab 2</div>
      <div className="h-12 border-8 border-red-500"><button>SAMPLE</button></div>
    </div>
  </div>
  </div>
</div>

  );
  <Footer/>
};

export default Stake;
