// footer layout
import type {ReactNode} from "react";

type FooterProp = {
    children: ReactNode;
}
function Footer({ children }:FooterProp) {
    return <footer>{children}</footer>;
}
export default Footer;