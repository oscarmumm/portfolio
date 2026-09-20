import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Navbar } from "./Navbar";

export const Header = () => {
    const [navBarActive, setNavBarActive] = useState<boolean>(false);
    return (
        <header className="fixed top-0 w-full flex items-center justify-between p-3">
            <h1>OSCAR</h1>
            <button
                className="md:hidden"
                onClick={() => setNavBarActive(!navBarActive)}
            >
                <MdMenu />
            </button>
            <Navbar isOpen={navBarActive} />
        </header>
    );
};
