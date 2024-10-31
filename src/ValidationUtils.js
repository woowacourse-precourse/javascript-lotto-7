import { MESSAGES, DIVISORS } from "./Constants.js";

const isNumber = (input) => {
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
    if (money % DIVISORS.MONEY !== 0) {
        throw new Error(MESSAGES.ERROR.MONEY_NOT_DIVISIBLE_BY_THOUSAND);
    }
};

export {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
};