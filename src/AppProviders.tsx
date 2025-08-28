import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { LanguageProvider, ThemeProvider } from "./context"

export const AppProviders = () => {
    return (

        <BrowserRouter>
            <ThemeProvider>
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
};