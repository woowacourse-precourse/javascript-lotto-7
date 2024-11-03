import { LOTTO, ERROR_MESSAGES } from '../utils/constants.js';

export const validatePurchaseAmount = (amount) => {
    const number = Number(amount);
    if (isNaN(number)) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (number < LOTTO.PRICE) {
        throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
    if (number % LOTTO.PRICE !== 0) {
        throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_UNIT);
    }
    return number;
};

export const validateLottoNumbers = (numbers) => {
    if (numbers.length !== LOTTO.SIZE) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }
    
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO.SIZE) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
    
    if (!numbers.every(num => isValidNumberRange(num))) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    }
    
    return true;
};

export const validateBonusNumber = (number, winningNumbers) => {
    const parsedNumber = Number(number);
    if (isNaN(parsedNumber)) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (!isValidNumberRange(parsedNumber)) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    }
    if (winningNumbers.includes(parsedNumber)) {
        throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    return parsedNumber;
};

const isValidNumberRange = (number) => {
    return number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER;
};