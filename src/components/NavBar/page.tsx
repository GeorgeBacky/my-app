// Import necessary dependencies
'use client';
import Image from "next/image";
import Link from "../UI/Link/page";
import { useState } from "react";
import { FaCircleXmark, FaBarsStaggered } from "react-icons/fa6";



// NavBar component
const NavBar = () => {
    // Create a state for the mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);

    // Toggle mobile menu state
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className="bg-red-700 border-red-950 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <Image src="/next.svg" alt="logo" width={100} height={60} />
                    {/* <span className="text-xl font-bold text-white uppercase ml-2">Next.js</span> */}
                </a>
                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm bg-slate-900 text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-slate-800"
                    aria-controls="mobile-menu"
                    aria-expanded={mobileMenu ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon for closed menu */}
                    <FaBarsStaggered className={`w-6 h-6 ${mobileMenu ? "hidden" : "block"}`} />
                    {/* Icon for open menu */}
                    <FaCircleXmark className={`w-6 h-6 ${mobileMenu ? "block" : "hidden"}`} />
                </button>
                <div
                    className={`${mobileMenu ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                    id="mobile-menu"
                >
                    <div className="flex max-[425px]:flex-col gap-2 pt-2 md:gap-4">
                        <Link hrefLink="/" name="Home" />
                        <Link hrefLink="/" name="Contact" />
                        <Link hrefLink="/" name="About" />
                        <div className="flex max-[425px]:flex-row gap-2 justify-end">
                            <Link hrefLink="/" name="Login" className="bg-slate-800 text-white" />
                            <Link hrefLink="/" name="Register" className="bg-slate-800 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
