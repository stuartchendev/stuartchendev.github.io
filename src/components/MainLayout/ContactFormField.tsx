import {type ChangeEvent} from "react";

// FieldVariant = "input" | "textarea";
type InputType = "text" | "email" | "tel" | "url";

type ContactFormFieldBaseProps={
    name: string;
    value: string;
    label: string;
    required?: boolean;
    autoComplete?: string;

}
type ContactFormFieldInputProps = ContactFormFieldBaseProps & {
    variant?: "input";
    type?: InputType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
type ContactFormFieldTextareaProps = ContactFormFieldBaseProps & {
    variant: "textarea";
    rows?: number;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
type ContactFormFieldProps =
    | ContactFormFieldInputProps
    | ContactFormFieldTextareaProps

type FormFieldLabelProps = {
    htmlFor: string;
    label: string;
}

function ContactFormField(props:ContactFormFieldProps){
    const {name, label, value, required = true, autoComplete = name} = props;
    return (
        <div className="contact-form__field">
            <FormFieldLabel htmlFor={name} label={label}/>
            {props.variant === "textarea" ?
                (<FormFieldInputTextarea
                    name={name}
                    value={value}
                    onChange={props.onChange}
                    rows={props.rows ?? 6}
                    required={required}
                />)
                : (
                    <FormFieldInput
                        name={name}
                        value={value}
                        onChange={props.onChange}
                        type={props.type ?? guessInputType(name)}
                        autoComplete={autoComplete}
                        required={required}
                    />
                )}
        </div>
    )
}

function FormFieldLabel({label, htmlFor}:FormFieldLabelProps){
    return(
        <label className="contact-form__label" htmlFor={htmlFor}>
            {label}
        </label>
    )
}

function FormFieldInput(
    {
        name,
        value,
        onChange,
        type,
        autoComplete,
        required,
    }: {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    autoComplete: string;
    required: boolean;
}) {
    return (
        <input
            className="contact-form__input"
            id={name}
            name={name}
            value={value}
            type={type}
            onChange={onChange}
            autoComplete={autoComplete}
            required={required}
        />
    );
}

function FormFieldInputTextarea(
    {
        name,
        value,
        onChange,
        rows,
        required,

    }: {
        name: string;
        value: string;
        onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
        rows: number;
        required: boolean;
    }) {
    return (
        <textarea
            className="contact-form__textarea"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            required={required}
        />
    )
}

function guessInputType(name: string): InputType {
    if (name === "email") return "email";
    if (name === "phone" || name === "tel") return "tel";
    if (name === "url" || name === "website") return "url";
    return "text";
}

export default ContactFormField;