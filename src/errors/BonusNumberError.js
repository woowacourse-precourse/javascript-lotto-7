import ValidationError from "./ValidationError.js";
import { ERROR_TITLE } from "../constants/errorMessage.js";

class BonusNumberError extends ValidationError {
  constructor(message) {
    super(`${ERROR_TITLE.bonusNumber} - ${message}`);
  }
}

export default BonusNumberError;
