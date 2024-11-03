import { MESSAGES, LOTTERY } from "./Constants.js";

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
    if (money % LOTTERY.PRICE !== 0) {
        throw new Error(MESSAGES.ERROR.MONEY_NOT_DIVISIBLE_BY_THOUSAND);
    }
};

const isOverLimit = (money) => {
    if (money > LOTTERY.BUY_LIMIT) {
        throw new Error(MESSAGES.ERROR.CANNOT_BUY_OVER_LIMIT);
    }
 }

 const isInRange = (number) => {
    if (number < LOTTERY.MIN_NUMBER || number > LOTTERY.MAX_NUMBER) {
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
    const winningNumbersAsNum = winningNumbers.map(num => Number(num));

    if (winningNumbersAsNum.includes(Number(bonusNumber))) {
        throw new Error(MESSAGES.ERROR.BONUS_NUMBER_IN_WINNING_NUMBERS);
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