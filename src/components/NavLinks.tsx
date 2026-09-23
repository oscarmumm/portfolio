import { motion } from "motion/react";
import { ThemeButton } from "./ThemeButton";

const NavLinksVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

export const NavLinks = () => {
    return (
        <motion.ul
            variants={NavLinksVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col md:flex-row items-center justify-center h-[calc(100vh-64px)] md:h-full p-3 font-bold bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50"
        >
            <li className="p-5 md:p-3">
                <a href="/#start">Start</a>
            </li>
            <li className="p-5 md:p-3">
                <a href="/#projects">Projects</a>
            </li>
            <li className="p-5 md:p-3">
                <a href="/#skills">Skills</a>
            </li>
            <li className="p-5 md:p-3">
                <a href="/#certifications">Certifications</a>
            </li>
            <li className="p-5 md:p-3">
                <a href="/#contact">Contact</a>
            </li>
            <li className="p-5 md:p-3">
                <ThemeButton />
            </li>
        </motion.ul>
    );
};
