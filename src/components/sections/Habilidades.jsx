import { motion } from 'framer-motion';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiReactrouter } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { VscVscode } from 'react-icons/vsc';

export default function Habilidades() {
    return (
        <motion.section
            className='relative min-h-screen p-5 flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
        >
            <div className='absolute top-0 flex items-center h-screen'>
                <IconContext.Provider value={{className: 'h-screen w-screen max-w-90 opacity-10'}}>
                    <VscVscode />
                </IconContext.Provider>
            </div>
            <h2 className='text-3xl font-bold mb-12'>Habilidades</h2>
            <ul className='text-base text-cyan-50 grid grid-cols-3 lg:grid-cols-4 gap-3 place-items-center'>
                <IconContext.Provider
                    value={{ className: 'text-cyan-300 h-16 w-16' }}
                >
                    <li className='flex flex-col items-center justify-center'>
                        <FaHtml5 />
                        <span>HTML</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <FaCss3Alt />
                        <span>CSS</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <RiJavascriptFill />
                        <span>JavaScript</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <BsBootstrapFill />
                        <span>Bootstrap</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <FaReact />
                        <span>ReactJS</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <RiTailwindCssFill />
                        <span>Tailwind</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <BiLogoTypescript />
                        <span>TypeScript</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <FaGitAlt />
                        <span>GIT</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <SiReactrouter />
                        <span className='text-center'>React Router</span>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <SiFramer />
                        <span className='text-center'>Framer Motion</span>
                    </li>
                </IconContext.Provider>
            </ul>
        </motion.section>
    );
}
