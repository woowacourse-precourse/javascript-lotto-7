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

const validatePurchaseAmount = (purchaseAmount) => {
    const amount = Number(purchaseAmount);
    if (isNaN(amount)) throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    if (amount < 0) throw new Error('[ERROR] 구입금액은 음수가 될 수 없습니다.');
    if (!Number.isInteger(amount)) throw new Error('[ERROR] 구입금액은 실수가 될 수 없습니다.');
    if (amount === 0) throw new Error('[ERROR] 돈을 내지 않으셨어요! 최소 한 장(1000원)부터 구입 가능합니다.');
    if (amount < 1000) throw new Error('[ERROR] 돈이 부족해요! 최소 한 장(1000원)부터 구입 가능합니다.');
    if (amount > 100000) throw new Error('[ERROR] 한 번에 최대 100개까지만 구입 가능합니다.');
    if (amount % 1000 !== 0) throw new Error('[ERROR] 거스름돈이 발생했어요! 구입금액은 1000으로 나누어 떨어져야 합니다.');
}