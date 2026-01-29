import type {LanguageId} from "../../types/i18n";

type LanguageOptionProps={
    onSelectLanguage: (lang: LanguageId) => void;
}

function LanguageOption({onSelectLanguage}:LanguageOptionProps) {
    return (
        <>
            <button className="language__btn" onClick={() => onSelectLanguage('en')}>
                En
            </button>
            <button className="language__btn" onClick={() => onSelectLanguage('zh-Tw')}>
                Zh(Tw)
            </button>
            <button className="language__btn" onClick={() => onSelectLanguage('jp')}>
                Ja
            </button>
        </>
    )
}

export default LanguageOption;