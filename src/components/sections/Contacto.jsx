import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdMailOutline } from 'react-icons/md';
import { LuClipboardPlus } from 'react-icons/lu';
import { FaLinkedin } from 'react-icons/fa';

export default function Contacto() {
    const [copied, setCopied] = useState(false);
    const email = 'oscarmumm@gmail.com';
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            console.log('click');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Error al copiar: ', error);
        }
    };
    return (
        <motion.section
            className='relative min-h-screen max-w-2xl p-5 flex flex-col items-center justify-center z-10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
        >
            <div className='absolute top-0 flex items-center h-screen pointer-events-none'>
                <IconContext.Provider
                    value={{
                        className: 'h-screen w-screen max-w-90 opacity-10',
                    }}
                >
                    <MdMailOutline />
                </IconContext.Provider>
            </div>
            <h2 className='text-3xl font-bold mb-12'>CONTACTO</h2>
            <ul className='text-xl text-cyan-50 text-center'>
                <li className='flex items-center mb-10'>
                    <p className='mr-5'>oscarmumm@gmail.com</p>
                    <button onClick={copyToClipboard}>
                        <LuClipboardPlus className='w-10 h-10 text-cyan-300' />
                    </button>
                </li>
                <li className='flex items-center mb-10'>
                    <p className='mr-5'>LinkedIn: oscar-mumm</p>
                    <a href='https://www.linkedin.com/in/oscar-mumm/' target='_blank'>
                        <FaLinkedin className='h-10 w-10 text-cyan-300' />
                    </a>
                </li>
                <li>
                    <a href='/files/CV Oscar Mumm - Software Developer 2025.pdf' download className='bg-cyan-300 p-3 text-cyan-900 font-bold rounded-lg shadow-lg'>
                        Descargar CV
                    </a>
                </li>
            </ul>
            <AnimatePresence>
                {copied && (
                    <motion.span
                        className='fixed top-20 bg-cyan-500 p-3 text-cyan-50 rounded-lg shadow-xl font-bold'
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: 'spring', stiffness: 300 },
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.8,
                            transition: { duration: 0.3, ease: 'easeInOut' },
                        }}
                    >
                        ¡E-mail copiado!
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
