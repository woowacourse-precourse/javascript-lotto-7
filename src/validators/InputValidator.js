import { ERROR_MESSAGE, formatErrorMessage } from "../constants/Messages.js";

class InputValidator {
    static isValidLottoAmount(lottoAmount) {
        if (lottoAmount.trim() === "") {
            throw Error(formatErrorMessage(ERROR_MESSAGE.IS_BLANK));
        }

        lottoAmount = Number(lottoAmount);

        if (!Number.isInteger(lottoAmount)) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.NOT_INTEGER));
        }
        if (lottoAmount < 0) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.NEGATIVE_AMOUNT));
        }
        if (lottoAmount % 1000 > 0) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.NOT_THOUSAND_UNIT));
        }
        if (lottoAmount / 1000 == 0) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.MINIMUM_AMOUNT));
        }
    }
}

export default InputValidator;
