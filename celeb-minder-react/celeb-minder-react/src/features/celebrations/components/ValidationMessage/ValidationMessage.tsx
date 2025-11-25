import type { ReactNode } from "react";

interface ValidationMessageProps {
    isValid: boolean|null;
    validMessage: ReactNode;
    invalidMessage: ReactNode
}

const ValidationMessage = ({isValid, validMessage, invalidMessage}: ValidationMessageProps) => {
    if (isValid === null) {
        return;
    } else if (isValid) {
        return <div className="valid-feedback">{validMessage}</div>
    } else {
        return <div className="invalid-feedback">{invalidMessage}</div>
    }
}

export default ValidationMessage;
