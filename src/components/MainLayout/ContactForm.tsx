import React, {useState} from "react";
import type {LanguageUi} from "../../types/i18n";
import ContactFormField from "./ContactFormField";

type ContactFieldEvent =
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

type ContactFormProps = {
    languageUi: LanguageUi;
}
type FormState = {
    name: string;
    email: string;
    message: string;
};
type ContactFormButtonProps = {
    isDisabled?: boolean;
}

const DEFAULT_TO_EMAIL = "stuartchen.dev@gmail.com";

function ContactForm({languageUi}: ContactFormProps) {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ContactFieldEvent) => {
        const {name, value} = e.currentTarget;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const subject = encodeURIComponent(`[Portfolio] Message from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );

        window.location.href = `mailto:${DEFAULT_TO_EMAIL}?subject=${subject}&body=${body}`;
    };

    const isDisabled = !form.name || !form.email || !form.message;

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <ContactFormField name="name"
                              value={form.name}
                              label={languageUi.contactLabelName}
                              onChange={handleChange}/>
            <ContactFormField name="email"
                              value={form.email}
                              label={languageUi.contactLabelEmail}
                              onChange={handleChange}/>
            <ContactFormField name="message"
                              variant="textarea"
                              value={form.message}
                              label={languageUi.contactLabelMessage}
                              onChange={handleChange}/>
            <ContactFormButton isDisabled={isDisabled}/>
        </form>
    );
}

function ContactFormButton({isDisabled}: ContactFormButtonProps) {
    return (
        <button className="contact-form__submit" type="submit" disabled={isDisabled}>
            Send
        </button>
    )
}

export default ContactForm;