import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiReactrouter, SiFramer } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

const habilidades = [
    { nombre: 'HTML', icono: FaHtml5 },
    { nombre: 'CSS', icono: FaCss3Alt },
    { nombre: 'JavaScript', icono: RiJavascriptFill },
    { nombre: 'Bootstrap', icono: BsBootstrapFill },
    { nombre: 'ReactJS', icono: FaReact },
    { nombre: 'Tailwind', icono: RiTailwindCssFill },
    { nombre: 'TypeScript', icono: BiLogoTypescript },
    { nombre: 'GIT', icono: FaGitAlt },
    { nombre: 'React Router', icono: SiReactrouter },
    { nombre: 'Framer Motion', icono: SiFramer },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.10,
            duration: 0.4,
        },
    }),
};

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
                <IconContext.Provider
                    value={{ className: 'h-screen w-screen max-w-90 opacity-10' }}
                >
                    <VscVscode />
                </IconContext.Provider>
            </div>

            <h2 className='text-3xl font-bold mb-12'>HABILIDADES</h2>

            
            <motion.ul
                className='text-base text-cyan-50 grid grid-cols-3 lg:grid-cols-4 gap-3 place-items-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <IconContext.Provider value={{ className: 'text-cyan-300 h-16 w-16' }}>
                    {habilidades.map((habilidad, index) => {
                        const Icono = habilidad.icono;
                        return (
                            <motion.li
                                key={habilidad.nombre}
                                className='flex flex-col items-center justify-center'
                                variants={itemVariants}
                                custom={index}
                            >
                                <Icono />
                                <span className='text-center'>{habilidad.nombre}</span>
                            </motion.li>
                        );
                    })}
                </IconContext.Provider>
            </motion.ul>
        </motion.section>
    );
}
