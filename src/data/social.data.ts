import type { Language } from "../types";

export const socialData: Record<
  Language,
  {
    linkedin: string;
    github: string;
    whatsapp: string;
  }
> = {
  es: {
    linkedin: "https://www.linkedin.com/in/nahuelnicolasnoir/",
    github: "https://github.com/nanonoir",
    whatsapp:
      "https://wa.me/543794657335?text=Hola%2C%20Nahuel%2C%20me%20pongo%20en%20contacto%20a%20traves%20de%20tu%20portfolio.",
  },
  en: {
    linkedin: "https://www.linkedin.com/in/nahuelnicolasnoir/?locale=en-US",
    github: "https://github.com/nanonoir",
    whatsapp:
      "https://wa.me/543794657335?text=Hello%2C%20Nahuel%2C%20I%27m%20contacting%20you%20through%20your%20portfolio.",
  },
};
