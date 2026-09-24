import { Link } from 'react-router';
import { ProjectCard } from '../ProjectCard';

export const ProjectsList = () => {
    return (
        <div className="p-4 w-full max-w-6xl">
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Mis proyectos</h2>
                <Link className='font-semibold' to="/projects">Ver todos... </Link>
            </div>
            {/* <div className='flex flex-col md:flex-row'> */}
            <div className='grid gap-4 md:grid-cols-3'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};
