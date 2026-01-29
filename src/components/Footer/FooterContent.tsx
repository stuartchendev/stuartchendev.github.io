import type {LanguageUi} from "../../types/i18n";

type FooterContentProp = {
    languageUi: LanguageUi
}

function FooterContent({languageUi}:FooterContentProp) {
    return (
        <div className="footer__content">FooterContent detail coming soon</div>
    )
}

export default FooterContent;