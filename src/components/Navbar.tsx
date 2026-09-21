import { motion } from 'motion/react';
import { ThemeButton } from './ThemeButton';

const navBarVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

export const Navbar = () => {
    return (
        <motion.nav
            variants={navBarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 mt-16 w-full flex flex-col p-3 z-10 font-bold shadow-xl bg-white text-slate-950 dark:bg-slate-800 dark:text-slate-100">
            <a className="p-3" href="/#start">
                Start
            </a>
            <a className="p-3" href="/#about">
                About
            </a>
            <a className="p-3" href="/#projects">
                Projects
            </a>
            <a className="p-3" href="/#skills">
                Skills
            </a>
            <a className="p-3" href="/#certifications">
                Certifications
            </a>
            <a className="p-3" href="/#contact">
                Contact
            </a>
            <ThemeButton />
        </motion.nav>
    );
};
