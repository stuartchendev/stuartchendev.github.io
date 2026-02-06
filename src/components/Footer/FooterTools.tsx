import BackToTop from "./BackToTop";
import ToggleTheme from "./ToggleTheme";

type FooterToolsProps = {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}


function FooterTools({theme, onToggleTheme}: FooterToolsProps) {
    return (
        <div className="footer__toolbar">
            <BackToTop />
            <ToggleTheme onToggleTheme={onToggleTheme} theme={theme} />
        </div>
    )
}

export default FooterTools;