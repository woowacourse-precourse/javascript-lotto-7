import { MESSAGES, GENERALS } from "./Constants.js";

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
    if (money % GENERALS.LOTTO_PRICE !== 0) {
        throw new Error(MESSAGES.ERROR.MONEY_NOT_DIVISIBLE_BY_THOUSAND);
    }
};

const isOverLimit = (money) => {
    if (money > GENERALS.LOTTO_BUY_LIMIT) {
        throw new Error(MESSAGES.ERROR.CANNOT_BUY_OVER_LIMIT);
    }
 }

export {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
    isOverLimit,
};