import type {ReactNode} from "react";

type HeaderBarProps = {
    children: ReactNode;
}

function HeaderBar({ children }: HeaderBarProps) {
    return (
        <div className="header__bar">
            {children}
        </div>
    );
}

export default HeaderBar;