import type {ReactNode} from "react";

type HeaderBrandProps={
    children: ReactNode;
}

function HeaderBrand( {children}: HeaderBrandProps ) {
    return (
        <div className="header__brand">
            {children}
        </div>
    );
}

export default HeaderBrand;