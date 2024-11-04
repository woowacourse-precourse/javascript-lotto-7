import { ERROR_MESSAGE, formatErrorMessage } from "../constants/Messages.js";
import { isBlank, isInteger, isInRange, hasNoDuplicates, validateWithRegex } from "../utils/ValidationUtils.js";
import { REGEX_ONLY_DIGITS_AND_COMMAS, REGEX_LOTTO_NUMBERS } from "../constants/Constants.js";

class InputValidator {
    static isValidLottoAmount(lottoAmount) {
        isBlank(lottoAmount, ERROR_MESSAGE.IS_BLANK);

        lottoAmount = Number(lottoAmount);
        isInteger(lottoAmount, ERROR_MESSAGE.NOT_INTEGER);

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
        isBlank(winningNumbers, ERROR_MESSAGE.IS_BLANK);

        validateWithRegex(REGEX_ONLY_DIGITS_AND_COMMAS, winningNumbers, ERROR_MESSAGE.INVALID_FORMAT);  // 콤마 외 다른 구분자 사용
        validateWithRegex(REGEX_LOTTO_NUMBERS, winningNumbers, ERROR_MESSAGE.OUT_OF_RANGE); // 1~45 사이의 정수만 가능

        winningNumbers = winningNumbers.split(",").map(num => Number(num.trim())); // 로또 번호는 항상 6개
        if (winningNumbers.length != 6) {
            throw Error(
                formatErrorMessage(ERROR_MESSAGE.LOTTO_NUMBER_COUNT)
            );
        }

        hasNoDuplicates(winningNumbers, ERROR_MESSAGE.DUPLICATE_NUMBERS);   // 중복된 로또 번호 존재

        return winningNumbers;
    }

    static isValidBonusNumber(bonusNumber, inputWinningNumbers) {
        isBlank(bonusNumber, ERROR_MESSAGE.IS_BLANK);

        bonusNumber = Number(bonusNumber);

        isInteger(bonusNumber, ERROR_MESSAGE.NOT_INTEGER);
        isInRange(bonusNumber, 1, 45, ERROR_MESSAGE.OUT_OF_RANGE);

        if(inputWinningNumbers.includes(bonusNumber)) {
            throw Error(formatErrorMessage(ERROR_MESSAGE.DUPLICATE_WINNING_LOTTO_NUMBERS));
        }

        return bonusNumber;
    }
}

export default InputValidator;
