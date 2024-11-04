import { LOTTO_RULES, MESSAGES } from "./Constants.js";

class Validator {
  
  // 구입 금액 
  static validateAmount(amount) {
    if (isNaN(amount) || amount <= 0 || amount % LOTTO_RULES.TICKET_PRICE !== 0) {
      throw new Error(MESSAGES.ERROR_INVALID_AMOUNT);
    }
  }
}

export default Validator;
