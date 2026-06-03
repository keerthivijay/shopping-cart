import { useState } from "react";

function ErrorBoundary({ children, fallback }) {
    const [hasError, setHasError] = useState(false);
    console.log("ErrorBoundary rendered with hasError:", hasError);

    // Simulate an error for testing purposes
    // Uncomment the line below to test the error boundary
    // throw new Error("Simulated error in ErrorBoundary");

    if (hasError) {
        return fallback;
    }

    return children;
}

export default ErrorBoundary;