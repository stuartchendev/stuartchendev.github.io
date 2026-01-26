type MainLayoutProps = {
    children: any;
}
function MainLayout({children}: MainLayoutProps) {
    return <main>{children}</main>;
}

export default MainLayout;