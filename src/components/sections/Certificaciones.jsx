import { motion } from 'framer-motion';
import { GoVerified } from 'react-icons/go';
import { IconContext } from 'react-icons';

const certificationsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.20,
            duration: 0.4,
        },
    }),
}

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
            <h2 className='text-3xl font-bold mb-12'>CERTIFICACIONES</h2>
            <motion.div className='lg:grid lg:grid-cols-3 gap-8' initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}>
                <motion.div variants={certificationsVariants} custom={1}>
                    <p className='text-xl xl:text-2xl font-bold mb-2'>TecLab</p>
                    <ul className='text-base xl:text-xl text-cyan-50  mb-5'>
                        <li>
                            Tecnicatura Superior en Programación <br />{' '}
                            (Cursando 2do año)
                        </li>
                    </ul>
                </motion.div>
                <motion.div className='row-span-3' variants={certificationsVariants} custom={2}>
                    <p className='text-xl xl:text-2xl font-bold mb-2'>
                        Educación IT
                    </p>
                    <ul className='text-base xl:text-xl text-cyan-50  mb-5'>
                        <li>Progressive Web Apps</li>
                        <li>React JS Developer</li>
                        <li>Responsive Web & Bootstrap</li>
                        <li>JavaScript Desarrollador Avanzado</li>
                        <li>Git: Desarrollo colaborativo</li>
                        <li>Introducción al Paradigma de Objetos</li>
                        <li>Maquetador Web Avanzado</li>
                        <li>JavaScript desde cero</li>
                        <li>Introducción a UX</li>
                        <li>Desarrollo Web con HTML</li>
                    </ul>
                </motion.div>
                <motion.div variants={certificationsVariants} custom={3}>
                    <p className='text-xl xl:text-2xl font-bold mb-2'>
                        FreeCodeCamp
                    </p>
                    <ul className='text-base xl:text-xl text-cyan-50  mb-5'>
                        <li>JavaScript Algorithms and Data Structures</li>
                        <li>Responsive Web Design</li>
                    </ul>
                </motion.div>
                <motion.div variants={certificationsVariants} custom={4}>
                    <p className='text-xl xl:text-2xl font-bold mb-2'>UTN</p>
                    <ul className='text-base xl:text-xl text-cyan-50  mb-5'>
                        <li>Introducción a la programación</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
