import imagenSGC1 from '../assets/img/projects/SGC1.webp';
import imagenSGC2 from '../assets/img/projects/SGC2.webp';
import imagenSGC3 from '../assets/img/projects/SGC3.webp';
import imagenSGC4 from '../assets/img/projects/SGC4.webp';
import imagenSGC5 from '../assets/img/projects/SGC5.webp';
import imagenGestorProyectos from '../assets/img/projects/Gestor-de-proyectos.webp';
import imagenAppClima from '../assets/img/projects/app-del-clima.webp';
import imagenKeepNotes from '../assets/img/projects/keep-notes.webp'

export const ProjectsData = [
    {
        titulo: 'Keep Notes',
        descripcion:
            'Una web-app sencilla que permite crear, editar y eliminar notas. Adicionalmente permite fijar las notas en la parte superior de la interfaz y cambiar el color en que se muestra cada una de ellas.',
        imagenPortada: imagenKeepNotes,
        imagenes: [],
        demo: 'https://store-management-oscardev.netlify.app/',
        codigo: 'https://github.com/oscarmumm/sistema-gestion-inventario',
        tecnologias: [
            'typeScript',
            'react',
            'tailwind',
            'react-router',
            'framer-motion',
            'git',
        ],
    },
    {
        titulo: 'Sistema de Gestión de Negocio (prototipo)',
        descripcion:
            'Una web-app que puede utilizarse para gestionar un negocio. Ventas, inventario, pedidos a proveedores, entre otras cosas. La vista no está optimizada para dispositivos móviles porque la app está pensada para usarse en pc en comercios.',
        imagenPortada: imagenSGC5,
        imagenes: [imagenSGC1, imagenSGC2, imagenSGC3, imagenSGC4, imagenSGC5],
        demo: 'https://store-management-oscardev.netlify.app/',
        codigo: 'https://github.com/oscarmumm/sistema-gestion-inventario',
        tecnologias: [
            'javascript',
            'react',
            'tailwind',
            'react-router',
            'framer-motion',
            'git',
        ],
    },
    {
        titulo: 'Gestor de Proyectos',
        descripcion:
            'Una PWA que permite planificar proyectos, dividiéndolos por etapas y agregando tareas que luego pueden moverse entre las distintas etapas. Esta versión utiliza local storage para que pueda probarse su funcionalidad con mas facilidad.',
        imagenPortada: imagenGestorProyectos,
        imagenes: [],
        demo: 'https://oscardev-gestordeproyectos.netlify.app/',
        codigo: 'https://github.com/oscarmumm/gestor-de-proyectos',
        tecnologias: ['javascript', 'react', 'react-router', 'git'],
    },
    {
        titulo: 'Página del clima',
        descripcion:
            'Una página para consultar el clima en todo el mundo. Consume la API de Openweather. Permite búsqueda manual de la ubicación, a la vez que da sugerencias mientras se tipea en el cuadro de búsqueda. Muestra información detallada y pronósticos con intervalos de 3hs',
        imagenPortada: imagenAppClima,
        imagenes: [],
        demo: 'https://oscardev-weather-app.netlify.app/',
        codigo: 'https://github.com/oscarmumm/weather-app-react',
        tecnologias: ['javascript', 'react', 'react-router', 'framer-motion' , 'git'],
    },
];
