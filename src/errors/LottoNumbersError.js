import ValidationError from "./ValidationError.js";
import { ERROR_TITLE } from "../constants/errorMessage.js";

class LottoNumbersError extends ValidationError {
  constructor(message) {
    super(`${ERROR_TITLE.lottoNumbers} - ${message}`);
  }
}

export default LottoNumbersError;
