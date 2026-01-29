import type {ReactNode} from "react";

type HeaderGuildLineProps = {
    children: ReactNode;
}

function HeaderGuildLine({children}: HeaderGuildLineProps) {
    return (
        <div className="header__guideline">
            {children}
        </div>
    )
}

export default HeaderGuildLine;