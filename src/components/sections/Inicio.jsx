import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Inicio() {
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
                    value={{ className: 'h-screen w-screen max-w-90 lg:max-w-xl opacity-10' }}
                >
                    <FaCode />
                </IconContext.Provider>
            </div>
            <h1 className='text-4xl lg:text-7xl font-black'>OSCAR MUMM</h1>
            {/* hacer animacion de tipeo en "desarrollador frontend", cursor parpadeante. fondo negro? */}
            <p className='text-2xl lg:text-4xl font-bold text-cyan-50 font-firacode'>Desarrollador Frontend</p>
        </motion.section>
    );
}
