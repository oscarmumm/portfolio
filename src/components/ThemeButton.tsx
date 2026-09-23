import { useTheme } from '../contexts/ThemeContext';

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className='cursor-pointer' onClick={toggleTheme}>
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
    );
};
