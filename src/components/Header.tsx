import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLinks } from "./NavLinks";
import { AnimatePresence } from "motion/react";

export const Header = () => {
    const [sideMenuActive, setSideMenuActive] = useState<boolean>(false);
    return (
        <header className="fixed top-0 w-full h-16 flex items-center justify-between p-3 shadow-xl z-40 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-50">
            <h1>OSCAR</h1>
            <button
                className="md:hidden text-2xl p-3"
                onClick={() => setSideMenuActive(!sideMenuActive)}
            >
                <MdMenu />
            </button>
            <AnimatePresence>
                {sideMenuActive && (
                    <nav className="fixed top-0 left-0 mt-16 w-full z-10 md:hidden">
                        <NavLinks />
                    </nav>
                )}
            </AnimatePresence>
            <nav className="hidden md:flex h-16">
                <NavLinks />
            </nav>
        </header>
    );
};
