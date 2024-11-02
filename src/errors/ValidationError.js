import { ERROR_HEADER } from "../constants/errorMessage.js";

class ValidationError extends Error {
  constructor(message) {
    super(`${ERROR_HEADER} ${message}\n`);
    this.name = this.constructor.name;
  }
}

export default ValidationError;
