import type { ContactContent, SubmissionStatus } from "../types/contact.types";

export const getResultMessage = (
    result: SubmissionStatus,
    content: ContactContent
) => {
    if (result === 'success') {
        return content.result.success
    }
    else if (result === 'error') {
        return content.result.error;
    }
    return null;
};