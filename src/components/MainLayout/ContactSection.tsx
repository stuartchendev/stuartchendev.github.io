import type {LanguageUi} from "../../types/i18n";
import ContactForm from "./ContactForm";

type CustomSectionProps = {
    languageUi: LanguageUi
}

function ContactSection({languageUi}:CustomSectionProps) {
    return(
        <section className="contact__me" id="contact">
            <ContactTitle title={languageUi.contactTitle}/>
            <ContactForm languageUi={languageUi}/>
        </section>
    )
}


function ContactTitle(props: { title: any }) {
    return (
        <h2 className="contact__title">{props.title}</h2>
    )
}
export default ContactSection;