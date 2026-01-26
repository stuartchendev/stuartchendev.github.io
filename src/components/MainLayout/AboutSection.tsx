type AboutSectionProps = {
    language: any;
}
function AboutSection({language}:AboutSectionProps) {
    return (
        <section className="placeholder" id="about">{language.aboutTitle} detail coming soon</section>
    )
}

export default AboutSection;