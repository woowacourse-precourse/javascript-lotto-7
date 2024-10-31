import { Console } from '@woowacourse/mission-utils';

export const getPurchaseAmount = async () => {
    while (true) {
        const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    
        try {
            validatePurchaseAmount(purchaseAmount);
            return purchaseAmount;
        } catch (error) {
            Console.print(error.message);
        }
    }
}

const validatePurchaseAmount = purchaseAmount => {
    const purchaseAmountValue = Number(purchaseAmount);
    if (isNaN(purchaseAmountValue)) throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    if (purchaseAmountValue < 0) throw new Error('[ERROR] 구입금액은 음수가 될 수 없습니다.');
    if (!Number.isInteger(purchaseAmountValue)) throw new Error('[ERROR] 구입금액은 실수가 될 수 없습니다.');
    if (purchaseAmountValue === 0) throw new Error('[ERROR] 돈을 내지 않으셨어요! 최소 한 장(1000원)부터 구입 가능합니다.');
    if (purchaseAmountValue < 1000) throw new Error('[ERROR] 돈이 부족해요! 최소 한 장(1000원)부터 구입 가능합니다.');
    if (purchaseAmountValue > 100000) throw new Error('[ERROR] 한 번에 최대 100개까지만 구입 가능합니다.');
    if (purchaseAmountValue % 1000 !== 0) throw new Error('[ERROR] 거스름돈이 발생했어요! 구입금액은 1000으로 나누어 떨어져야 합니다.');
}

export const getWinningNumbers = async () => {
    while (true) {
        const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

        try {
            return validateWinningNumbers(winningNumbers);
        } catch (error) {
            Console.print(error.message);
        }
    }
}

const validateWinningNumbers = winningNumbers => {
    const parsedWinningNumbers = winningNumbers.split(',').map(Number);
    const uniqueWinningNumbers = new Set(parsedWinningNumbers);

    if (parsedWinningNumbers.length !== 6) throw new Error('[ERROR] 6개의 숫자를 입력해주세요.');
    if (parsedWinningNumbers.length !== uniqueWinningNumbers.size) throw new Error('[ERROR] 중복되는 숫자가 있습니다.');

    parsedWinningNumbers.forEach((num) => {
        if (isNaN(num)) throw new Error('[ERROR] 숫자가 아닌 값이 있습니다.');
        if (num < 1 || num > 45) throw new Error('[ERROR] 모든 숫자는 1과 45 사이여야 합니다.');
    });

    return parsedWinningNumbers;
}

export const getBonusNumber = async (winningNumbers) => {
    while(true) {
        const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

        try {
            return validateBonusNumber(bonusNumber, winningNumbers);
        } catch (error) {
            Console.print(error.message);
        } 
    }
}

const validateBonusNumber = (bonusNumber, winningNumbers) => {
    const parsedBonusNumber = Number(bonusNumber)

    if (isNaN(parsedBonusNumber)) throw new Error('[ERROR] 숫자를 입력해주세요.');
    if (parsedBonusNumber < 1 || parsedBonusNumber > 45) throw new Error('[ERROR] 보너스 번호는 1과 45 사이여야 합니다.');
    if (winningNumbers.includes(parsedBonusNumber)) throw new Error('[ERROR] 이미 당첨 번호에 있는 숫자예요! 중복되지 않는 다른 숫자를 입력해주세요.');

    return parsedBonusNumber;
}