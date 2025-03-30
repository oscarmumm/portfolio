import Certificaciones from './components/sections/Certificaciones';
import Contacto from './components/sections/Contacto';
import Footer from './components/sections/Footer';
import Habilidades from './components/sections/Habilidades';
import Inicio from './components/sections/Inicio';
import Proyectos from './components/sections/Proyectos';
import SobreMi from './components/sections/SobreMi';

function App() {
    return (
        // <main className='bg-cyan-950 text-cyan-300 min-h-screen flex flex-col'>
        <main className='fixed overflow-auto bg-gradient-to-b from-cyan-950 to-cyan-800 text-cyan-300 h-screen w-full font-montserrat'>
            <div className='flex flex-col items-center'>
                <Inicio />
                <SobreMi />
                <Habilidades />
                <Proyectos />
                <Certificaciones />
                <Contacto />
                <Footer />
            </div>
        </main>
    );
}

export default App;
