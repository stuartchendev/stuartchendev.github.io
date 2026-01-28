// @ts-ignore
import avatar from "../../img/favicon.svg";
import type {LanguageUi} from "../../types/i18n";
import AboutSectionContent from "./AboutSectionContent";

type AboutSectionProps = {
    languageUi: LanguageUi;
}

function AboutSection({languageUi}:AboutSectionProps) {
    const aboutInfo = languageUi.aboutInfo;
    if (!aboutInfo) return null;

    return (
        <section className="about__me" id="about">
            <AboutSectionAvatar />
            <AboutSectionContent aboutInfo={aboutInfo} />
        </section>
    )
}

function AboutSectionAvatar() {
    return (
        <img
            src={avatar}
            alt="Emblem of Chen Yi Ting"
            className="about__avatar"
            width={300}
            height={300}
            loading="lazy"
        />
    );
}



export default AboutSection;