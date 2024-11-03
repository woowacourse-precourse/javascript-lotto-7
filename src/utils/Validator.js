import { LOTTO_INFO } from "../config/constants.js";

class Validator {

    static validatePaidMoney(paidMoney) {
        return paidMoney > 0 && paidMoney % LOTTO_INFO.LOTTO_TICKET_PRICE === 0;
    }

    static validateWinningNumber(winningNumber) {
        const winningNumberArray = winningNumber.split(',').map(num => num.trim());
        return winningNumberArray.length === 6 && winningNumberArray.every(num => Number(num) >= 1 && Number(num) <= 45);
    }

}

export default Validator;