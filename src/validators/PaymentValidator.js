import { ERROR_MESSAGES } from "../constants/messages";
import { LOTTO_RULES_CONSTANTS } from "../constants/lottoRules";

class PaymentValidator {
  static checkThousandUnit(price) {
    if(price % LOTTO_RULES_CONSTANTS.ticket_price !== 0) {
      throw new Error(ERROR_MESSAGES.invalid_payment);
    }
  }
}

export default PaymentValidator;