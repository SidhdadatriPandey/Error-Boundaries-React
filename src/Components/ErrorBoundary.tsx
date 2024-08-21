import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
    error: string | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI
        return { error: error.message };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error information for debugging
        console.error("Error caught in ErrorBoundary:", error);
        console.error("Error info:", errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <div>Some error occurred</div>
                    <p>Here is what happened: {this.state.error}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
