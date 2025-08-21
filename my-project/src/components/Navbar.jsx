import React from 'react'

const Navbar = () => {
    return (
         <nav className=" mx-auto   ">
   
        <div className="mycontainer px-16 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-3xl font-bold">
          <span className="text-green-600">&lt;</span>
          <span className="text-pink-300">Pass</span>
          <span className="text-green-600">OP/&gt;</span>
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap gap-6 text-pink-600 text-lg">
          <li><a href="/" className="hover:font-bold">Home</a></li>
          <li><a href="/login" className="hover:font-bold">Login</a></li>          
          <li><a href="/about" className="hover:font-bold">About</a></li>
        </ul>
      </div>
      
    </nav>
    )
}

export default Navbar
