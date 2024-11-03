import {ERROR_CODE, PURCHASE_PRICE, WINNING_NUMBER} from "../constants/constants.js";

export const validator = {
    isPositiveNumber(number) {
        return /^[1-9]\d*$/.test(number.toString().trim())
    },
    isInRange(number, minValue = 1, maxValue = Number.MAX_SAFE_INTEGER) {
        return Number(number) <= maxValue && Number(number) >= minValue
    },
    isDividedNumberByValue(number, value) {
        return Number(number) % Number(value) === 0
    },
    hasDuplicates(numbers) {
        return new Set(numbers).size !== numbers.length;
    },
    isCorrectSize(number, size) {
        return number.length === size;
    },
    purchasePrice: {
        validate(purchasePrice) {
            if (!validator.isPositiveNumber(purchasePrice))
                throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER);
            if (!validator.isInRange(purchasePrice)) {
                throw new Error(ERROR_CODE.OUT_OF_RANGE(1, Number.MAX_SAFE_INTEGER));
            }
            if (!validator.isDividedNumberByValue(purchasePrice, PURCHASE_PRICE.MIN_CURR_UNIT))
                throw new Error(ERROR_CODE.NOT_DIVIDED_BY_VALUE(PURCHASE_PRICE.MIN_CURR_UNIT));
            return Number(purchasePrice);
        }
    },
    winningNumbers: {
        validate(winningNumbers) {
            winningNumbers.forEach((number) => {
                if (!validator.isPositiveNumber(number))
                    throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER)
                if (!validator.isInRange(number, WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER))
                    throw new Error(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
            })
            if (!validator.isCorrectSize(winningNumbers, WINNING_NUMBER.SIZE))
                throw new Error(ERROR_CODE.SIZE_OUT_OF_RANGE(WINNING_NUMBER.SIZE));
            if (validator.hasDuplicates(winningNumbers)) {
                throw new Error(ERROR_CODE.NUMBER_DUPLICATE)
            }
            return winningNumbers.map(Number);
        }
    },
    bonusNumbers: {
        validate(bonusNumber) {
            if (!validator.isPositiveNumber(bonusNumber))
                throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER);
            if (!validator.isInRange(bonusNumber, WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER)) {
                throw new Error(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
            }
            return Number(bonusNumber);
        },
        validateWithWinningNumbers(bonusNumber, winningNumber) {
            if (validator.hasDuplicates([...winningNumber, bonusNumber]))
                throw new Error(ERROR_CODE.BONUS_NUMBER_DUPLICATE)
        }
    }
}
