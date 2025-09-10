import { useContext } from "react";
import { LanguageContext } from "../../../context";
import { contactData } from "../../../data";
import { useContactForm } from "../../../hooks/useContactForm";
import { getResultMessage } from "../../../utilities/contact.utils";

export const ContactForm = () => {
    const { language } = useContext(LanguageContext);
    const currentContent = contactData[language];

    const {
        result,
        handleSubmit,
        formData,
        handleChange,
        errors
    } = useContactForm();

    return (
        <section id="contact" className="contact-container">
            <h2>{currentContent.title}</h2>

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }} 
                />

                {errors.email && <span className="error-message">{errors.email}</span>}

                <input
                    type="email"
                    name="email"
                    placeholder={currentContent.form.placeholderEmail}
                    className="contact-input contact-email"
                    id="contact-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <textarea
                    name="message"
                    placeholder={currentContent.form.placeholderMessage}
                    className="contact-input contact-message"
                    id="contact-message-input"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required 
                />
                
                <button 
                    type="submit"
                    className="contact-button"
                    disabled={result === 'sending' || !formData.email || !formData.message || !(!errors.email) }
                >
                    {currentContent.form.buttonText}
                </button>

            </form>
            
            {result && result !== 'sending' && (
                <div className={`submission-result ${result}`}>
                    <pre>{getResultMessage(result, currentContent)}</pre>
                </div>
            )}

        </section>
    );
};