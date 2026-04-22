import type {AboutInfo, LanguageUi} from "../../types/i18n";

type FooterContentProp = {
    languageUi: LanguageUi;
}
type FooterCopyrightProps = {
    year: number;
    name: AboutInfo["aboutName"];
}

function FooterContent({languageUi}:FooterContentProp) {
    const copyrightOwner = languageUi.aboutInfo.aboutName;
    const year = new Date().getFullYear();
    return (
        <>
            <FooterCopyright name={copyrightOwner} year={year} />
        </>
    )
}
function FooterCopyright({name, year}:FooterCopyrightProps) {
    return (
        <p>© {year} {name}</p>
    )
}

export default FooterContent;