function BackToTop() {

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className="footer__backup" onClick={handleBackToTop} aria-label="Back to top">
            <span className="footer__backup-icon">↑</span>
        </button>
    )
}

export default BackToTop;