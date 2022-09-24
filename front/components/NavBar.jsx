import React from "react";


const NavBar = () => {
    return(
        <div>
            <div>
                <Link href="/">
                  <h1>Logo</h1>
                </Link>
                <ul>
                    <li><Link href="#"></Link>Home</li>
                    <li><Link href="/about"></Link>About</li>
                    <li><Link href="/contact"></Link>Contacts</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;