class ErrorHandler {
    static throw(message) {
        throw new Error(`[ERROR]: ${message}`);
    }

    static throwIf(condition, message) {
        if (condition) {
            ErrorHandler.throw(message);
        }
    }
}

export default ErrorHandler;
