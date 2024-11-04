class ErrorHandler {
  static throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default ErrorHandler;
