import React, { Component } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    return(
        <>
        <div className="fixed w-full text-white/60 flex justify-between p-4 items-center">

        <div className="logo">
            <h1>OraciBank</h1>
        </div>
        <nav>
            <ul className="md:flex gap-8 p-6">
                <li><Link href="/"><a>Início</a></Link></li>
                <li><Link href="/"><a>Sobre</a></Link></li>
                <li><Link href="/"><a>Contatos</a></Link></li>
                <button className="px-8 py-0.5 border hover:bg-gray-600/30">Logout</button>
            </ul>
            <ul className="hidden md:flex gap-8 p-6">
                <li><Link href="/"><a>Início</a></Link></li>
                <li><Link href="/"><a>Sobre</a></Link></li>
                <li><Link href="/"><a>Contatos</a></Link></li>
                <button className="px-8 py-0.5 border hover:bg-gray-600/30">Logout</button>
            </ul>
        </nav>

        </div>
        </>
    );
}

export default NavBar;