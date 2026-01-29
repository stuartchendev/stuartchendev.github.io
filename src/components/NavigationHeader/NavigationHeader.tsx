// NavigationHeader layout
import type {ReactNode} from "react";
import HeaderBar from "./HeaderBar";

type NavigationHeaderProps = {
    children: ReactNode;
}

function NavigationHeader({children}:NavigationHeaderProps) {
    return (
        <header className="header">
            <HeaderBar>
                {children}
            </HeaderBar>
        </header>
    )
}

export default NavigationHeader;