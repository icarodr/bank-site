import React, { Component } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    return(
        <div className="absolute top-0 bg-transparent z-10">
            <div className="text-whitesmoke">
                <ul className="text-white/60 flex items-center ml-10 h-20">
                <Link href="/">
                  <h1 className="text-white/60 text-2xl">Bank</h1>
                </Link>
                    <li className="ml-10"><Link href="/"><a className="hover:text-black/40">Home</a></Link></li>
                    <li className="ml-10"><Link href="/"><a className="hover:text-black/40">About</a></Link></li>
                    <li className="ml-10"><Link href="/"><a className="hover:text-black/40">Contacts</a></Link></li>
                    <button className="px-8 py-0.5 border hover:bg-gray-600/30 ml-40">Logout</button>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;