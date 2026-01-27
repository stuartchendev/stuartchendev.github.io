import type {LanguageId, LanguageUi} from "../../types/i18n";

type LanguageOptionsProps ={
    languageUi: LanguageUi;
    onSelectLanguage: (lang: LanguageId) => void;
}

function LanguageOptions({languageUi, onSelectLanguage}:LanguageOptionsProps) {
    return (
        <>
            <div className="placeholder">LanguageOptions detail coming soon</div>
            <button onClick={() => onSelectLanguage('en')}>
                EN
            </button>
            <button onClick={() => onSelectLanguage('zh-Tw')}>
                ZH
            </button>
            <button onClick={() => onSelectLanguage('jp')}>
                JP
            </button>
        </>
    )
}

export default LanguageOptions;