import { Link } from "react-router";
import { ProjectCard } from "../ProjectCard";

export const ProjectsList = () => {
    return (
        <div className="p-4">
            <h2>Mis proyectos</h2>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <Link to="/projects">Ver todos... </Link>
        </div>
    );
};
