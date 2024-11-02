import { Console } from '@woowacourse/mission-utils';
import PurchaseAmount from './PurchaseAmount.js';
import Lotto from './Lotto.js';
import BonusNumber from './BonusNumber.js';

export const getPurchaseAmount = async () => {
    while (true) {
        const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    
        try { 
            return new PurchaseAmount(purchaseAmount).getAmount();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getWinningNumbers = async () => {
    while (true) {
        const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        const parsedWinningNumbers = winningNumbers.split(',').map(Number);

        try {
            return new Lotto(parsedWinningNumbers).getNumbers();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getBonusNumber = async (winningNumbers) => {
    while(true) {
        const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        const parsedBonusNumber = Number(bonusNumber)

        try {
            return new BonusNumber(parsedBonusNumber, winningNumbers).getBonusNumber();
        } catch (error) {
            Console.print(error.message);
        } 
    }
}