import type {LanguageId} from "../../types/i18n";

type LanguageOptionProps={
    onSelectLanguage: (lang: LanguageId) => void;
}

function LanguageOption({onSelectLanguage}:LanguageOptionProps) {
    return (
        <div className="header__languageOptions">
            <button className="language__btn" onClick={() => onSelectLanguage('en')}>
                En
            </button>
            <button className="language__btn" onClick={() => onSelectLanguage('zh-Tw')}>
                Zh(Tw)
            </button>
            <button className="language__btn" onClick={() => onSelectLanguage('ja')}>
                Ja
            </button>
        </div>
    )
}

export default LanguageOption;