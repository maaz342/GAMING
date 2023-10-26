import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>Contact us at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>&copy; {new Date().getFullYear()} ADRESS</p>
        <p>&copy; {new Date().getFullYear()} PHONE</p>
      </div>
    </footer>
  );
};

export default Footer;
