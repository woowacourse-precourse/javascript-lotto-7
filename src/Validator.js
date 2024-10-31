import {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible
} from './ValidationUtils.js';

const validateMoney = (userMoney) => {
    isEmpty(userMoney);
    const money = isNumber(userMoney);
    isNegative(money);
    isMoneyDivisible(money);
    return money
};

export { validateMoney };