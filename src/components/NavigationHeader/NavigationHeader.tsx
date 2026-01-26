// NavigationHeader layout
type NavigationHeaderProps = {
    children: any;
}
function NavigationHeader({children}:NavigationHeaderProps) {
    return <header>{children}</header>
}

export default NavigationHeader;