import { LOTTO_INFO } from "../config/constants.js";

class Validator {

    static validatePaidMoney(paidMoney) {
        return paidMoney > 0 && paidMoney % LOTTO_INFO.LOTTO_TICKET_PRICE === 0;
    }

}

export default Validator;