import type {LanguageId} from "../../types/i18n";

type LanguageOptionProps={
    onSelectLanguage: (lang: LanguageId) => void;
}

function LanguageOption({onSelectLanguage}:LanguageOptionProps) {
    return (
        <>
            <div className="placeholder">LanguageOptions detail TBC</div>
            <button onClick={() => onSelectLanguage('en')}>
                EN
            </button>
            <button onClick={() => onSelectLanguage('zh-Tw')}>
                中文(繁體)
            </button>
            <button onClick={() => onSelectLanguage('jp')}>
                日本語
            </button>
        </>
    )
}

export default LanguageOption;