import type {LanguageUi} from "../../types/i18n";
import {t} from "../../helper/uiHelper"

type AboutSectionProps = {
    languageUi: LanguageUi;
}
function AboutSection({languageUi}:AboutSectionProps) {
    return (
        <section className="placeholder" id="about">{t(languageUi, "aboutTitle", "About")} detail coming soon</section>
    )
}

export default AboutSection;