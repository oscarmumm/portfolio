import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGitAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiReactrouter } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';

export const Skills = () => {
    return (
        <div className="p-4 w-full max-w-6xl">
            <h2 className='my-3 text-2xl font-semibold'>Skills</h2>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaHtml5 />
                    </span>
                    <span className='ml-3'>HTML</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaCss3Alt />
                    </span>
                    <span className='ml-3'>CSS</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <BiLogoJavascript />
                    </span>
                    <span className='ml-3'>JavaScript</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <BiLogoTypescript />
                    </span>
                    <span className='ml-3'>TypeScript</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaGitAlt />
                    </span>
                    <span className='ml-3'>Git</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaReact />
                    </span>
                    <span className='ml-3'>React</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <RiTailwindCssFill />
                    </span>
                    <span className='ml-3'>Tailwind CSS</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaBootstrap />
                    </span>
                    <span className='ml-3'>Bootstrap</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <BiLogoPostgresql />
                    </span>
                    <span className='ml-3'>PostgreSQL</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <SiReactrouter />
                    </span>
                    <span className='ml-3'>React Router</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <FaNodeJs />
                    </span>
                    <span className='ml-3'>Node JS</span>
                </li>
                <li className='p-3 flex items-center rounded-xl shadow-xl text-xl bg-white dark:bg-slate-800'>
                    <span className='text-4xl'>
                        <SiFramer />
                    </span>
                    <span className='ml-3'>Motion</span>
                </li>
            </ul>
        </div>
    );
};
