type ToggleThemeProps ={
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}

function ToggleTheme({ theme, onToggleTheme }: ToggleThemeProps) {
    return (
        <button className="footer__theme-icon" onClick={onToggleTheme}>
            {theme==='dark'? '🌙' : '☀️'}
        </button>
    )
}

export default ToggleTheme;