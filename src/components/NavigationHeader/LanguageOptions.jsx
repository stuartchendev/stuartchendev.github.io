function LanguageOptions({language, setLanguage}) {
    // Test Language code correct enter
    console.log('LanguageOptions:', language);
    return (
        <>
            <div>LanguageOptions</div>
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