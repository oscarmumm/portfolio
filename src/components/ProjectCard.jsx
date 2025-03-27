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
        <div className='bg-cyan-600 rounded-xl shadow-lg max-w-80 w-full h-full mb-5 grid grid-rows-[auto_1fr]'>
            <div className='h-44 w-full aspect-square overflow-hidden'>
                <img
                    src={proyecto.imagenPortada}
                    alt={`imagen proyecto ${proyecto.titulo}`}
                    className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl'
                />
            </div>
            <div className='flex flex-col justify-between p-3'>
                <h2 className='text-xl font-bold text-center'>
                    {proyecto.titulo}
                </h2>
                <p className='text-base my-3'>{proyecto.descripcion}</p>
                <div className='flex my-5'>
                    {proyecto.tecnologias.map((tecnologia, index) => {
                        const Icono = iconosTecnologias[tecnologia];
                        return Icono ? (
                            <Icono
                                key={index}
                                className='text-3xl mx-2 text-cyan-950'
                            />
                        ) : null;
                    })}
                </div>
                <div className='flex items-center justify-between text-base font-bold'>
                    <a
                        className='p-2 bg-cyan-800 rounded-lg shadow-lg min-w-32 text-center'
                        target='_blank'
                        href={proyecto.demo}
                    >
                        Demo
                    </a>
                    <a
                        className='p-2 bg-cyan-800 rounded-lg shadow-lg min-w-32 text-center'
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
