import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

export default function Inicio() {
    const text = 'Desarrollador Frontend';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, 75);

            return () => clearTimeout(timeout);
        }
    }, [index, text]);
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
                    value={{
                        className:
                            'h-screen w-screen max-w-90 lg:max-w-xl opacity-10',
                    }}
                >
                    <FaCode />
                </IconContext.Provider>
            </div>
            <h1 className='text-4xl lg:text-7xl font-black'>OSCAR MUMM</h1>
            <p className='text-2xl lg:text-4xl font-bold text-cyan-50 font-firacode'>
                {/* Desarrollador Frontend */}
                <motion.span>{displayedText}</motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    |{' '}
                </motion.span>
            </p>
        </motion.section>
    );
}
