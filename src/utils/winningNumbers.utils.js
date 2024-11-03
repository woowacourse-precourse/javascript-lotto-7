import {validationCheck} from "../validation/validationCheck.js";
import {ERROR_CODE, WINNING_NUMBER} from "../constants/constants.js";

export const winningNumbersUtils = {
    validate(winningNumbers) {
        winningNumbers.forEach((number) => {
            if (!validationCheck.isPositiveNumber(number))
                throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER)
            if (!validationCheck.isInRange(number, WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER))
                throw new Error(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
        })
        if (!validationCheck.isCorrectSize(winningNumbers, WINNING_NUMBER.SIZE))
            throw new Error(ERROR_CODE.SIZE_OUT_OF_RANGE(WINNING_NUMBER.SIZE));
        if (validationCheck.hasDuplicates(winningNumbers)) {
            throw new Error(ERROR_CODE.NUMBER_DUPLICATE)
        }
        return winningNumbers.map(Number);
    },
}