import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiReactrouter } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { VscVscode } from 'react-icons/vsc';

const iconosTecnologias = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: RiJavascriptFill,
    git: FaGitAlt,
    react: FaReact,
    typeScript: BiLogoTypescript,
    tailwind: RiTailwindCssFill,
    bootstrap: BsBootstrapFill,
    'react-router': SiReactrouter,
    'framer-motion': SiFramer,
};

export default function ProjectCard({ proyecto }) {
    return (
        <div className='bg-cyan-600 rounded-lg shadow-lg w-full max-w-6xl h-full mb-5 grid grig-rows-[auto-1fr] lg:grid-cols-2 cursor-default'>
            <div className=' overflow-hidden'>
                <img
                    src={proyecto.imagenPortada}
                    alt={`imagen proyecto ${proyecto.titulo}`}
                    className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg'
                />
            </div>
            <div className='flex flex-col justify-between p-3'>
                <h2 className='text-xl font-bold text-center'>
                    {proyecto.titulo}
                </h2>
                <p className='text-base m-3'>{proyecto.descripcion}</p>
                <div className='flex items-center justify-center mb-3'>
                    {proyecto.tecnologias.map((tecnologia, index) => {
                        const Icono = iconosTecnologias[tecnologia];
                        return Icono ? (
                            <Icono
                                key={index}
                                className='text-3xl mx-2 text-cyan-300'
                            />
                        ) : null;
                    })}
                </div>
                <div className='flex items-center justify-end text-base font-bold'>
                    <a
                        className='p-2 bg-cyan-800 rounded-lg shadow-lg min-w-32 w-full mx-2 text-center transition-transform duration-300 hover:scale-105 hover:bg-cyan-500'
                        target='_blank'
                        href={proyecto.demo}
                    >
                        Demo
                    </a>
                    <a
                        className='p-2 bg-cyan-800 rounded-lg shadow-lg min-w-32 w-full mx-2 text-center transition-transform duration-300 hover:scale-105 hover:bg-cyan-500'
                        target='_blank'
                        href={proyecto.codigo}
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
}
