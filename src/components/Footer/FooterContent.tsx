import type {AboutInfo, LanguageUi} from "../../types/i18n";
import MediaLinkList from "../NavigationHeader/MediaLinkList";

type FooterContentProp = {
    languageUi: LanguageUi;
}
type FooterCopyrightProps = {
    year: number;
    name: AboutInfo["aboutName"];
}

function FooterContent({languageUi}:FooterContentProp) {
    const socialLinks = languageUi.socialLink;
    const copyrightOwner = languageUi.aboutInfo.aboutName;
    const year = new Date().getFullYear();
    return (
        <>
            <FooterCopyright name={copyrightOwner} year={year} />
            <MediaLinkList links={socialLinks}/>
        </>
    )
}
function FooterCopyright({name, year}:FooterCopyrightProps) {
    return (
        <p>© {year} {name}</p>
    )
}

export default FooterContent;