import ValidationError from "./ValidationError.js";
import { ERROR_TITLE } from "../constants/errorMessage.js";

class MoneyError extends ValidationError {
  constructor(message) {
    super(`${ERROR_TITLE.money} - ${message}`);
  }
}

export default MoneyError;
