import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../../context";
import { contactData, socialData } from "../../../data";
import { useContactForm } from "../../../hooks/useContactForm";
import { getResultMessage } from "../../../utilities/contact.utils";
import { IconLink, SectionHeading, SectionShell } from "../../ui";
import { githubIcon, githubWhiteIcon, linkedinIcon, whatsappIcon } from "../../../assets/icons";

export const ContactForm = () => {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const currentContent = contactData[language];
    const currentSocialLinks = socialData[language];
    const currentGithubIcon = theme === "dark" ? githubWhiteIcon : githubIcon;

    const {
        result,
        handleSubmit,
        formData,
        handleChange,
        errors
    } = useContactForm();

    return (
        <section id="contact" className="py-16 text-center">
            <SectionShell className="px-4">
                <SectionHeading align="center" className="mb-8 text-6xl md:text-8xl">
                    {currentContent.title}
                </SectionHeading>

                <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-6">
                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                    />

                    {errors.email && (
                        <span className="rounded-lg border border-danger bg-danger/10 px-4 py-3 text-left text-sm text-danger">
                            {errors.email}
                        </span>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder={currentContent.form.placeholderEmail}
                        className="w-full rounded-lg border-2 border-border bg-surface p-3 font-display text-2xl text-text transition-colors duration-300 placeholder:text-text-muted"
                        id="contact-email-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder={currentContent.form.placeholderMessage}
                        className="w-full rounded-lg border-2 border-border bg-surface p-3 font-display text-xl text-text transition-colors duration-300 placeholder:text-text-muted"
                        id="contact-message-input"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                    />

                    <button
                        type="submit"
                        className="rounded-lg bg-accent px-6 py-3 text-2xl text-on-accent transition-all duration-300 hover:scale-105 hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-text-muted disabled:hover:scale-100"
                        disabled={result === "sending" || !formData.email || !formData.message || !!errors.email}
                    >
                        {result === "sending" ? currentContent.form.buttonSending : currentContent.form.buttonText}
                    </button>
                </form>

                {result && result !== "sending" && (
                    <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border bg-surface p-4 text-text">
                        <pre className="whitespace-pre-wrap text-left font-display">
                            {getResultMessage(result, currentContent)}
                        </pre>
                    </div>

                )}

                <div className="mt-6 flex items-center justify-center gap-4">
                    <IconLink href={currentSocialLinks.linkedin} label="LinkedIn" className="flex items-center justify-center">
                        <img src={linkedinIcon} alt="Linkedin" className="h-12 w-12 transition-transform duration-200" />
                        <span className="ml-2 hidden text-text-muted sm:inline">LinkedIn</span>
                    </IconLink>
                    <IconLink href={currentSocialLinks.github} label="GitHub" className="flex items-center justify-center">
                        <img src={currentGithubIcon} alt="Github" className="h-12 w-12 transition-transform duration-200" />
                        <span className="ml-2 hidden text-text-muted sm:inline">Github</span>
                    </IconLink>
                    
                    <IconLink href={currentSocialLinks.whatsapp} label="WhatsApp" className="flex items-center justify-center">
                        <img src={whatsappIcon} alt="WhatsApp" className="h-12 w-12 transition-transform duration-200" />
                        <span className="ml-2 hidden text-text-muted sm:inline">WhatsApp</span>
                    </IconLink>
                </div>
            </SectionShell>
        </section>
    );
};
