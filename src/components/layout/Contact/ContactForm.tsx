import { useContext } from "react"
import { LanguageContext } from "../../../context"
import { useContactForm } from "../../../hooks/useContactForm";
import { contactData } from "../../../data";
import { Turnstile } from "@marsidev/react-turnstile";

export const ContactForm = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = contactData[language];

    const {
        formData, 
        result,
        token,
        setToken,
        handleChange,
        handleSubmit
    } = useContactForm();

    const getResultMessage = () => {
        if (result === 'success') return currentContent.result.success;
        if (result === 'error') return currentContent.result.error;
        return null;
    };

    return (
        <section id="contact" className="contact-container">
            <h2>{currentContent.title}</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder={currentContent.form.placeholderEmail}
                 className="contact-input contact-email"
                 id="contact-email-input"
                 required 
                />
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={currentContent.form.placeholderMessage}
                className="contact-input contact-message"
                id="contact-message-input"
                rows={5}
                required />

            <Turnstile
            siteKey = {import.meta.env.VITE_TURNSTILE_ACCES_KEY}
            onSuccess={(token) => setToken(token)}
            />

            <button
             type="submit"
             disabled={!token || result === 'sending'}
             className="contact-button"
             >
                {result === 'sending' ? currentContent.form.buttonSending : currentContent.form.buttonText}
             </button>
            </form>

            {result && result !== 'sending' && (
                <div className="submission-result">
                    <pre>{getResultMessage()}</pre>
                </div>
            )}
        </section>
    );
};