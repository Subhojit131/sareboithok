import React from 'react';

const Navbar = () => {
    return (
        <>
            <header className="text-grey-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wra p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-xl">User Authentication</span>
                    </a>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center absolute right-[2%]">
                        <a className="mr-5 hover:text-white">Home</a>
                        <br/>
                        <a href="/signup" className="mr-5 hover:text-white">Signup</a>
                        <br/>
                        <a className="mr-5 hover:text-white">Login</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar