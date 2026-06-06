import type {LanguageUi} from "../../types/i18n";
import type {LanguageId} from "../../config";
import LanguageOption from "./LanguageOption";
import MediaLinkList from "./MediaLinkList";

type LanguageOptionsProps ={
    languageUi: LanguageUi;
    onSelectLanguage: (lang: LanguageId) => void;
}


function LanguageOptions({languageUi, onSelectLanguage}:LanguageOptionsProps) {
    const socialLink = languageUi.socialLink;
    return (
        <div className="header__right">
            <MediaLinkList links={socialLink} />
            <LanguageOption onSelectLanguage={onSelectLanguage} />
        </div>
    )
}

export default LanguageOptions;