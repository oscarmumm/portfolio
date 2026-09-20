import { About } from "../components/sections/About";
import { Certifications } from "../components/sections/Certifications";
import { Contact } from "../components/sections/Contact";
import { ProjectsList } from "../components/sections/ProjectsList";
import { Skills } from "../components/sections/Skills";
import { Start } from "../components/sections/Start";

export const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Start />
            <About />
            <ProjectsList />
            <Skills />
            <Certifications />
            <Contact />
        </div>
    );
};
