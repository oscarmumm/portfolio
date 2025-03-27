import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { ProjectsData } from '../../data/projectsData';

export default function Proyectos() {
    return (
        <motion.section
            className='relative min-h-screen p-5 flex flex-col items-center justify-center mb-24'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
        >
            <h2 className='text-3xl font-black mb-12'>PROYECTOS</h2>
            <p className='text-xl text-cyan-50 text-center mb-10'>
                Estos son algunos de los proyectos que hice para poner en
                práctica mis habilidades
            </p>
            <ul className='text-xl text-cyan-50 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
                {ProjectsData.map((project) => (
                    <li>
                        <ProjectCard proyecto={project} />
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}
