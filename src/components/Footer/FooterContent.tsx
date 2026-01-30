import type {AboutInfo, LanguageUi} from "../../types/i18n";
import MediaLinkList from "../NavigationHeader/MediaLinkList";

type FooterContentProp = {
    languageUi: LanguageUi;
}
type FooterCopyrightProps = {
    name: AboutInfo["aboutName"];
}

function FooterContent({languageUi}:FooterContentProp) {
    const socialLinks = languageUi.socialLink;
    const copyrightOwner = languageUi.aboutInfo.aboutName;
    return (
        <>
            <FooterCopyright name={copyrightOwner} />
            <MediaLinkList links={socialLinks}/>
        </>
    )
}
function FooterCopyright({name}:FooterCopyrightProps) {
    return (
        <p>© 2026 {name}</p>
    )
}

export default FooterContent;