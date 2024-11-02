import { generateError } from "../utils/generateError.js";

class Validator {
  static isNotNumber(value) {
    if (Number.isNaN(value)) {
      generateError("현재 입력은 숫자가 아닙니다. 숫자만 입력할 수 있습니다.");
    }
  }
}

export default Validator;
