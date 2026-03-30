import type {LanguageUi} from "../../types/i18n";

type CustomSectionProps = {
    languageUi: LanguageUi
}

function ContactSection({languageUi}:CustomSectionProps) {
    return(
        <section className="contact__me" id="contact">
            <ContactIntro title={languageUi.contactIntro}/>
            <ContactEmail />
        </section>
    )
}


function ContactIntro(props: { title: string }) {
    return (
        <h2 className="contact__intro">{props.title}</h2>
    )
}

function ContactEmail() {
    return (
        <a href="mailto:stuartchen.dev@gmail.com" className="contact__email">
            stuartchen.dev@gmail.com
        </a>
    )
}

export default ContactSection;