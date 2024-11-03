import { Console } from "@woowacourse/mission-utils";

class ErrorHandler {
  static throw(message) {
    const formattedMessage = `[ERROR] ${message}`;
    Console.print(formattedMessage);
    throw new Error(formattedMessage);
  }

  static throwIf(condition, message) {
    if (condition) {
      ErrorHandler.throw(message);
    }
  }

  static createRetryLoop(callback) {
    return async () => {
      try {
        return await callback();
      } catch {
        return await callback();
      }
    }
  }
}

export default ErrorHandler;
