import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Navbar } from './Navbar';
import { AnimatePresence } from 'motion/react';

export const Header = () => {
    const [navBarActive, setNavBarActive] = useState<boolean>(false);
    return (
        <header className="fixed top-0 w-full h-16 flex items-center justify-between p-3 shadow-xl z-40 bg-white text-slate-950 dark:bg-slate-800 dark:text-slate-100">
            <h1>OSCAR</h1>
            <button
                className="md:hidden text-2xl p-3"
                onClick={() => setNavBarActive(!navBarActive)}>
                <MdMenu />
            </button>
            <AnimatePresence>{navBarActive && <Navbar />}</AnimatePresence>
        </header>
    );
};
