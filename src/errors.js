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
