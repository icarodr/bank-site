import React, { Component, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const NavBar = () => {

    const [active, setActive] = useState(false);

    const showMenu = () =>{
        setActive(!active);
    }

    return(
        <>
        <div className="fixed z-50 w-full text-white/60 flex justify-between p-4 items-center">

        <div className="logo">
            <h1 className="text-2xl">OraciBank</h1>
        </div>
         <nav>
            <div className="absolute right-10 md:hidden">
                <AiOutlineMenu onClick={showMenu} size={20}/>
            </div>

            <ul className="hidden md:flex gap-8 p-6">
                <li className="hover:text-white/10"><Link href="/"><a>Início</a></Link></li>
                <li className="hover:text-white/10"><Link href="/about"><a>Sobre</a></Link></li>
                <li className="hover:text-white/10"><Link href="/contact"><a>Contatos</a></Link></li>
                <li className="px-8 py-0.5 border hover:bg-gray-600/30"><Link href="/login">Logout</Link></li>
            </ul>
            <MobileMenu showMenu={showMenu} active={active}/>
         </nav>
        </div>
        </>
    );
}

export default NavBar;