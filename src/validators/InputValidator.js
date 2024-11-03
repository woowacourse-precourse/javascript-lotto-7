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

    static isValidWinningNumbers(winningNumbers) {
        if (winningNumbers.trim() === "") {
            throw Error(formatErrorMessage(ERROR_MESSAGE.IS_BLANK));
        }

        const regexOnlyDigitsAndCommas = /^[0-9,]+$/; // 콤마 외 다른 구분자 사용
        if (!regexOnlyDigitsAndCommas.test(winningNumbers)) {
            throw Error(
                formatErrorMessage(ERROR_MESSAGE.INVALID_FORMAT)
            );
        }

        const regexLottoNumbers =
            /^(?:[1-9]|[1-3][0-9]|4[0-5])(,(?:[1-9]|[1-3][0-9]|4[0-5]))*$/; // 1~45 사이의 정수만 가능
        if (!regexLottoNumbers.test(winningNumbers)) {
            throw Error(
                formatErrorMessage(ERROR_MESSAGE.OUT_OF_RANGE)
            );
        }

        winningNumbers = winningNumbers.replace(/\s+/g, "").split(","); // 로또 번호는 항상 6개
        if (winningNumbers.length != 6) {
            throw Error(
                formatErrorMessage(ERROR_MESSAGE.LOTTO_NUMBER_COUNT)
            );
        }

        const winningNumbersSet = new Set(winningNumbers); // 중복된 로또 번호 존재
        if (winningNumbers.length == 6 && winningNumbersSet.size !== 6) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.DUPLICATE_NUMBERS));
        }
    }

    static isValidBonusNumber(bonusNumber) {
        if (bonusNumber.trim() === "") {
            throw Error(formatErrorMessage(ERROR_MESSAGE.IS_BLANK));
        }

        bonusNumber = Number(bonusNumber);

        if (!Number.isInteger(bonusNumber)) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.NOT_INTEGER));
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.OUT_OF_RANGE));
        }
    }
}

export default InputValidator;
