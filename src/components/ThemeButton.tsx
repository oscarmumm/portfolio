import { useTheme } from '../contexts/ThemeContext';

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
    );
};
