import type {LanguageUi} from "../../types/i18n";

type AboutSectionProps = {
    languageUi: LanguageUi;
}
function AboutSection({languageUi}:AboutSectionProps) {
    return (
        <section className="placeholder" id="about">{languageUi.aboutTitle ?? "About"} detail coming soon</section>
    )
}

export default AboutSection;