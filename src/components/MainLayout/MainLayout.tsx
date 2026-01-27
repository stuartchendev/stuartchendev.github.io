import type {ReactNode} from "react";

type MainLayoutProps = {
    children: ReactNode;
}
function MainLayout({children}: MainLayoutProps) {
    return <main>{children}</main>;
}

export default MainLayout;