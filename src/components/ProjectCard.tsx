export const ProjectCard = () => {
    return (
        <div className="border-xl shadow-xl p-4 rounded-xl bg-white dark:bg-slate-800 w-full">
            <h3 className="font-semibold">Título del proyecto</h3>
            <p>Descripción del proyecto, conceptos que se manejan en la app</p>
            <div className="flex justify-between">
                <button className="p-4 w-24 rounded-xl shadow-xl cursor-pointer dark:bg-white dark:text-slate-900 bg-slate-900 text-slate-50">
                    Código
                </button>
                <button className="p-4 w-24 rounded-xl shadow-xl cursor-pointer dark:bg-white dark:text-slate-900 bg-slate-900 text-slate-50">
                    Demo
                </button>
            </div>
        </div>
    );
};
