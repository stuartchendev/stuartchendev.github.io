// NavigationHeader layout
import type {ReactNode} from "react";

type NavigationHeaderProps = {
    children: ReactNode;
}
function NavigationHeader({children}:NavigationHeaderProps) {
    return <header>{children}</header>
}

export default NavigationHeader;