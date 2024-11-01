import { MESSAGES, GENERALS } from "./Constants.js";

const isNumber = (input) => {
    input = input.trim();
    if (input === '') {
        throw new Error(MESSAGES.ERROR.NOT_A_NUMBER);
    }
    const inputAsNum = Number(input);
    if (isNaN(inputAsNum)) {
        throw new Error(MESSAGES.ERROR.NOT_A_NUMBER);
    }
    return inputAsNum;
};

const isEmpty = (input) => {
    if (input === '') {
        throw new Error(MESSAGES.ERROR.EMPTY_INPUT);
    }
};

const isNegative = (input) => {
    if (input < 0) {
        throw new Error(MESSAGES.ERROR.NEGATIVE_AMOUNT);
    }
};

const isMoneyDivisible = (money) => {
    if (money % GENERALS.LOTTO_PRICE !== 0) {
        throw new Error(MESSAGES.ERROR.MONEY_NOT_DIVISIBLE_BY_THOUSAND);
    }
};

const isOverLimit = (money) => {
    if (money > GENERALS.LOTTO_BUY_LIMIT) {
        throw new Error(MESSAGES.ERROR.CANNOT_BUY_OVER_LIMIT);
    }
 }

 const isInRange = (number) => {
    if (number < GENERALS.LOTTO_MIN_NUMBER || number > GENERALS.LOTTO_MAX_NUMBER) {
        throw new Error(MESSAGES.ERROR.NUMBER_OUT_OF_RANGE);
    }
    return number;
}

const isSixNumbers = (numbers) => {
    if (numbers.length !== 6) {
        throw new Error(MESSAGES.ERROR.NOT_SIX_NUMBERS);
    }
}

const hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length !== numbers.length) {
        throw new Error(MESSAGES.ERROR.HAS_DUPLICATES);
    }
}

const hasDuplicateWithWinningNumbers = (winningNumbers, bonusNumber) => {
    if (winningNumbers.includes(bonusNumber)) {
        throw new Error(MESSAGES.ERROR.BONUSNUMBER_IN_WINNING_NUMBERS);
    }
};

export {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
    isOverLimit,
    isInRange,
    isSixNumbers,
    hasDuplicates,
    hasDuplicateWithWinningNumbers,
};