import App from "./App";
import { LanguageProvider, ThemeProvider } from "./context"

export const AppProviders = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ThemeProvider>
    )
};
