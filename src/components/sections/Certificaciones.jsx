import { motion } from 'framer-motion';
import { GoVerified } from 'react-icons/go';
import { GiDiploma } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export default function Certificaciones() {
    return (
        <motion.section
            className=' relative min-h-screen p-5 flex flex-col items-center justify-center lg:text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
        >
            <div className='absolute top-0 flex items-center h-screen'>
                <IconContext.Provider
                    value={{
                        className: 'h-screen w-screen max-w-90 opacity-10',
                    }}
                >
                    <GoVerified />
                </IconContext.Provider>
            </div>
            <h2 className='text-3xl font-black mb-12'>CERTIFICACIONES</h2>
            <div className='lg:grid lg:grid-cols-3 gap-8'>
                <div>
                    <p className='text-xl font-bold mb-2'>TecLab</p>
                    <ul className='text-base text-cyan-50 italic mb-5'>
                        <li>
                            Tecnicatura Superior en Programación <br />{' '}
                            (Cursando 2do año)
                        </li>
                    </ul>
                </div>
                <div className='row-span-3'>
                    <p className='text-xl font-bold mb-2'>Educación IT</p>
                    <ul className='text-base text-cyan-50 italic mb-5'>
                        <li>Desarrollo Web con HTML</li>
                        <li>Introducción a UX</li>
                        <li>JavaScript desde cero</li>
                        <li>Maquetador Web Avanzado</li>
                        <li>Introducción al Paradigma de Objetos</li>
                        <li>Git: Desarrollo colaborativo</li>
                        <li>JavaScript desarrollador Avanzado</li>
                        <li>Responsive Web & Bootstrap</li>
                        <li>React JS Developer</li>
                        <li>Progressive Web Apps</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold mb-2'>FreeCodeCamp</p>
                    <ul className='text-base text-cyan-50 italic mb-5'>
                        <li>Responsive Web Design</li>
                        <li>JavaScript Algorithms and Data Structures</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold mb-2'>UTN</p>
                    <ul className='text-base text-cyan-50 italic mb-5'>
                        <li>Introducción a la programación</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}
