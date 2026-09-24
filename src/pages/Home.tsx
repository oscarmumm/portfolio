import { Certifications } from "../components/sections/Certifications";
import { Contact } from "../components/sections/Contact";
import { ProjectsList } from "../components/sections/ProjectsList";
import { Skills } from "../components/sections/Skills";
import { Start } from "../components/sections/Start";

export const Home = () => {
    return (
        <div className="flex flex-col items-center bg-slate-200 dark:bg-slate-700">
            <Start />
            <ProjectsList />
            <Skills />
            <Certifications />
            <Contact />
        </div>
    );
};
