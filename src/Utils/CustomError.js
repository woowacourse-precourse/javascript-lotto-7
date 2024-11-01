class CustomError extends Error {
  static #DEFAULT_MESSAGE = '[ERROR]';

  constructor(message) {
    super(CustomError.#DEFAULT_MESSAGE + message);
  }
}

export default CustomError;
