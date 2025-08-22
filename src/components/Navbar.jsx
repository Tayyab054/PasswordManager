import React from 'react'

const Navbar = () => {
    return (
        <nav className=" mx-auto px-4 sm:px-8 md:px-16 border-b-2 border-green-500 ">
            <div className="mycontainer px-16 py-3 flex flex-wrap  justify-between items-center">
                {/* Logo */}
                <div className="flex items-center lg:text-3xl sm:text-xl  font-bold">
                    <span className="text-green-600">&lt;</span>
                    <span className="text-pink-600">Pass</span>
                    <span className="text-green-600">OP/&gt;</span>
                </div>
                <a href="https://github.com/Tayyab054/PasswordManager" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 mt-2 sm:mt rounded-md bg-emerald-100 text-pink-600 font-bold  hover:bg-amber-200 transition">
                    <img   src={`${import.meta.env.BASE_URL}github.svg`}  alt="GitHub" className="w-6 h-6" />GitHub</a>
                {/* src="public/github.svg"*/}
            </div>
        </nav>
    )
}
export default Navbar
