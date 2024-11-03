import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, DELIMITERS } from './constants.js';
import PurchaseAmount from './PurchaseAmount.js';
import Lotto from './Lotto.js';
import BonusNumber from './BonusNumber.js';

export const getPurchaseAmount = async () => {
    while (true) {
        const purchaseAmount = await Console.readLineAsync(MESSAGES.INFO.PURCHASE_AMOUNT_PROMPT);
    
        try { 
            return new PurchaseAmount(purchaseAmount).getAmount();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getWinningNumbers = async () => {
    while (true) {
        const winningNumbers = await Console.readLineAsync(MESSAGES.INFO.WINNING_NUMBERS_PROMPT);
        const parsedWinningNumbers = winningNumbers.split(DELIMITERS.WINNING_NUMBERS_INPUT).map(Number);

        try {
            return new Lotto(parsedWinningNumbers).getNumbers();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getBonusNumber = async (winningNumbers) => {
    while(true) {
        const bonusNumber = await Console.readLineAsync(MESSAGES.INFO.BONUS_NUMBER_PROMPT);
        const parsedBonusNumber = Number(bonusNumber)

        try {
            return new BonusNumber(parsedBonusNumber, winningNumbers).getBonusNumber();
        } catch (error) {
            Console.print(error.message);
        } 
    }
}