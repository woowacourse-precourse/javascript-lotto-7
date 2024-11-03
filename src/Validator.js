import {
    isNumber,
    isEmpty,
    isNegative,
    isMoneyDivisible,
    isOverLimit,
    isInRange,
    isSixNumbers,
    hasDuplicates,
    hasDuplicateWithWinningNumbers,
} from './ValidationUtils.js';

const validateMoney = (userMoney) => {
    isEmpty(userMoney);
    const money = isNumber(userMoney);
    isNegative(money);
    isMoneyDivisible(money);
    isOverLimit(money);
};

const validateWinningNumbers = (winningNumbers) => {
    isEmpty(winningNumbers);
    const sixNumbers = winningNumbers.split(',').map(num => num.trim());

    sixNumbers.forEach(number => {
        const verifiedNumber = isNumber(number);
        isNegative(verifiedNumber);
        isInRange(verifiedNumber);
    });
    isSixNumbers(sixNumbers);
    hasDuplicates(sixNumbers);
};

const validateBonusNumber = (winningNumbers, bonusNumber) => {
    isEmpty(bonusNumber);
    const verifiedBonusNumber = isNumber(bonusNumber);
    isNegative(verifiedBonusNumber);
    isInRange(verifiedBonusNumber);
    hasDuplicateWithWinningNumbers(winningNumbers, bonusNumber);
};

export { validateMoney, validateWinningNumbers, validateBonusNumber };