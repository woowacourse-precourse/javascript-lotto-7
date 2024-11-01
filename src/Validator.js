import {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
    isOverLimit,
    isInRange,
    isSixNumbers,
    hasDuplicates,
} from './ValidationUtils.js';

const validateMoney = (userMoney) => {
    isEmpty(userMoney);
    const money = isNumber(userMoney);
    isNegative(money);
    isMoneyDivisible(money);
    isOverLimit(money)
    return money
};

const validateWinningNumbers = (winningNumbers) => {
    isEmpty(winningNumbers);
    const sixNumbers = winningNumbers.split(',').map(num => num.trim());

    sixNumbers.forEach(number => {
        isNumber(number);
        isNegative(number);
        isInRange(number);
        
    });
    isSixNumbers(sixNumbers);
    hasDuplicates(sixNumbers);

    return numberArray;
}

export { validateMoney, validateWinningNumbers };