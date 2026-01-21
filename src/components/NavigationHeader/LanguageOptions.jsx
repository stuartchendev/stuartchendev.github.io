function LanguageOptions({language, setLanguage}) {
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