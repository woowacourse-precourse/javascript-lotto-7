import {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
    isOverLimit,
} from './ValidationUtils.js';

const validateMoney = (userMoney) => {
    isEmpty(userMoney);
    const money = isNumber(userMoney);
    isNegative(money);
    isMoneyDivisible(money);
    isOverLimit(money)
    return money
};

export { validateMoney };