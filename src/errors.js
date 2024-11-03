import { ERROR_MESSAGES } from './constants/errorConstants.js';

export function validateMoneyUnit(userInput) {
    if (userInput % 1000 !== 0) {
        throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
    }
}

export function validateIsNumber(userInput) {
    if (isNaN(userInput)) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
}

export function validateWinnerNumbers(numbers) {
    if (numbers.length !== 6) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
    numbers.forEach(number => {
        validateIsNumber(number);
        validateNumberInRange(number);
    });
}

export function validateNumberInRange(number) {
    if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    }
}

export function validateBonusNumber(bonusNumber, winnerNumbers) {
    validateIsNumber(bonusNumber);
    validateNumberInRange(bonusNumber);
    if (winnerNumbers.includes(bonusNumber)) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
}