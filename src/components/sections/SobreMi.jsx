import { motion } from 'framer-motion';
import { IoPerson } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function SobreMi() {
    return (
        <motion.section
            className='relative min-h-screen max-w-2xl p-5 flex flex-col items-center justify-center z-10'
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
                    <IoPerson />
                </IconContext.Provider>
            </div>
            <h2 className='text-3xl font-bold mb-12'>SOBRE MI</h2>
            <p className='text-xl text-cyan-50 text-center'>
                Trabajo como encargado en una franquicia de comida rápida desde
                hace 16 años, pero siempre me interesó la tecnología y el
                <strong className='text-cyan-300'> Desarrollo Web</strong>. Completé la
                certificación <strong className='text-cyan-300'> Frontend Web Developer </strong> en Educación IT y actualmente estoy cursando la
                <strong className='text-cyan-300'> Tecnicatura Superior en Programación </strong> en TecLab. Me
                especializo en <strong className='text-cyan-300'> React con JavaScript y Tailwind CSS </strong>, y disfruto
                desarrollando interfaces interactivas y eficientes. Busco mi
                primera oportunidad en IT para aplicar mis conocimientos y
                seguir aprendiendo en un entorno profesional.
            </p>
        </motion.section>
    );
}
