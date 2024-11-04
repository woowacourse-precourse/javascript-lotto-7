import { ExceptionHandler } from "./ExceptionHandler.js";

export class RepeatHandler {
  #exceptionHandler;

  constructor() {
    this.#exceptionHandler = new ExceptionHandler();
  }

  async repeatUntilSuccess(func) {
    try {
      return await func.call();
    } catch (e) {
      await this.#exceptionHandler.printError(e);
      return await this.repeatUntilSuccess(func)
    }
  }
}
