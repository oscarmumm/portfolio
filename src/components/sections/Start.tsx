import hero from '../../assets/hero.png';

export const Start = () => {
    return (
        <div className="p-4 my-5 flex flex-col justify-around items-center md:flex-row-reverse w-full max-w-6xl">
            <img src={hero} alt="" />
            <div>
                <h1 className="text-6xl font-bold">Oscar Mumm</h1>
                <p className="text-2xl font-semibold text-slate-800 dark:text-slate-400">
                    Técnico Superior en Programación
                </p>
                <p className="text-lg">
                    Hola, soy Oscar Mumm, Técnico Superior en Programación y
                    Frontend Web Developer . Hace 16 años trabajo como encargado
                    en una franquicia de comida rápida, experiencia que me
                    permitió desarrollar habilidades como liderazgo,
                    organización y resolución de problemas . Actualmente estoy
                    enfocado en iniciar mi carrera en el mundo IT,
                    especializándome en desarrollo frontend con React,
                    TypeScript y Tailwind CSS . Me gusta crear interfaces
                    claras, intuitivas y eficientes, cuidando tanto la
                    experiencia del usuario como la calidad del código.
                </p>
                <button className="p-3 hover:scale-105 rounded-xl shadow-xl cursor-pointer dark:bg-white dark:text-slate-900 bg-slate-900 text-slate-50">
                    Descargar CV
                </button>
            </div>
        </div>
    );
};
