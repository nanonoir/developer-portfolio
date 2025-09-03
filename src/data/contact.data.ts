import type { Language } from "../types"
import type { ContactContent } from "../types/contact.types"

export const contactData: Record<Language, ContactContent> = {
    es: {
        title: 'Contacto',
        form: {
            placeholderEmail: 'Tu Email',
            placeholderMessage: 'Tu Mensaje',
            buttonText: 'Enviar Mensaje',
            buttonSending: 'Enviando mensaje'
        },
        result: {
            success: `Email enviado con éxito.
Muchas gracias por ponerte en contacto conmigo, recibirás mi respuesta a la brevedad en tu bandeja de correo electrónico.

Saludos cordiales.
- Noir Nahuel, Full Stack Software Developer`,
            error: 'Algo salió mal. Por favor, inténtalo de nuevo.'
        }
    },
    en: {
        title: 'Contact',
        form: {
            placeholderEmail: 'Your Email',
            placeholderMessage: 'Your Message',
            buttonText: 'Submit',
            buttonSending: 'Submitting...'
        },
        result: {
            success: `Email sent successfully.
Thank you for contacting me, you will receive my response shortly in your email inbox.

Best regards,
- Noir Nahuel, Full Stack Software Developer`,
            error: 'Something went wrong. Please try again.',
        }
    }
};
  