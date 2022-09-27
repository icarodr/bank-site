import React, { Component, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu"

const NavBar = () => {

    const [active, setActive] = useState(false);

    const showMenu = () =>{
        setActive(!active);
    }

    return(
        <>
        <div className="fixed w-full text-white/60 flex justify-between p-4 items-center">

        <div className="logo">
            <h1 className="text-2xl">OraciBank</h1>
        </div>
         <nav>

            <div className="absolute right-10 md:hidden">
                <AiOutlineMenu onClick={showMenu} size={20}/>
            </div>

            <ul className="hidden md:flex gap-8 p-6">
                <li className="hover:text-black/10"><Link href="/"><a>Início</a></Link></li>
                <li className="hover:text-black/10"><Link href="/"><a>Sobre</a></Link></li>
                <li className="hover:text-black/10"><Link href="/"><a>Contatos</a></Link></li>
                <button className="px-8 py-0.5 border hover:bg-gray-600/30">Logout</button>
            </ul>
            <MobileMenu showMenu={showMenu} active={active}/>
         </nav>
        </div>
        </>
    );
}

export default NavBar;