type LanguageOptionsProps ={
    language: any;
    setLanguage: any;
}

function LanguageOptions({language, setLanguage}:LanguageOptionsProps) {
    return (
        <>
            <div className="placeholder">LanguageOptions detail coming soon</div>
            <button onClick={() => setLanguage('en')}>
                EN
            </button>
            <button onClick={() => setLanguage('zh-Tw')}>
                ZH
            </button>
            <button onClick={() => setLanguage('jp')}>
                JP
            </button>
        </>
    )
}

export default LanguageOptions;