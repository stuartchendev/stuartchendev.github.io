import type {LanguageUi} from "../../types/i18n";

type CustomSectionProps = {
    languageUi: LanguageUi
}
function ContactSection({languageUi}:CustomSectionProps) {
    return(
        <section className="placeholder" id="contact">Contact detail coming soon</section>
    )
}
export default ContactSection;