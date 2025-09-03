import { useState } from "react";
import { type ChangeEventTarget, type SubmissionStatus } from "../types/contact.types";

export const useContactForm = () => {
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [result, setResult] = useState<SubmissionStatus>(null);
    const [token, setToken] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<ChangeEventTarget>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult("sending");

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        data.append("access_key", ACCESS_KEY);
        data.append("botcheck", token);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                 method: "POST",
                 body: data
                });

            const json = await response.json();

            if (json.success) {
                setResult("success");
                form.reset();
                setFormData({email: '', message: ''});
            } else {
                setResult('error');
            }
        } catch (error) {
            setResult('error');
        }
    };

    return {
        formData,
        result,
        token,
        setToken,
        handleChange,
        handleSubmit
    };
};