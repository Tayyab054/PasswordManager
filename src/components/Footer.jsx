import React from 'react'
const Footer = () => {
  return (
    <footer className="border-t border-green-500 bg-green-300 text-green-700 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom line */}
        <div className="text-center font-semibold text-sm sm:text-base">
          © {new Date().getFullYear()} PassOP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
