import type {LanguageUi} from "../../types/i18n";
import MediaLinkList from "../NavigationHeader/MediaLinkList";

type CustomSectionProps = {
    languageUi: LanguageUi
}

function ContactSection({languageUi}:CustomSectionProps) {
    const socialLinks = languageUi.socialLink.slice(0,3);
    return(
        <section className="contact__me" id="contact">
            <MediaLinkList links={socialLinks}/>
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