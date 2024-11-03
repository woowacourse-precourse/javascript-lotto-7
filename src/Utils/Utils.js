import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, CONSTANTS } from './Constants.js';
import { InputValidator } from './Validator.js';

export default class InputUtils {

    static async inputPurchaseAmount() {
        while (1) {
            try {
                const purchaseAmount = await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT_INPUT);
                InputValidator.purchaseAmountValidator(purchaseAmount);

                return await purchaseAmount   
            } catch (error) {
                this.printErrorMessage(error.message);
            }
        }
    }

    static async inputWinningNumber() {
        while (1) {
            try {
                const winningNumber = await Console.readLineAsync(MESSAGE.WINNING_NUMBER_INPUT);
                const winningNumberList = this.getNumberList(winningNumber);
                InputValidator.winningNumberValidator(winningNumberList);

                return await winningNumberList   
            } catch (error) {
                this.printErrorMessage(error.message);
            }
        }
    }

    static async inputBonusNumber(winningNumber) {
        while (1) {
            try {
                const bonusNumber = await Console.readLineAsync(MESSAGE.BONUS_NUMBER_INPUT);
                const bonusNumberList = this.getNumberList(bonusNumber);
                InputValidator.bonusNumberValidator(bonusNumberList, winningNumber);

                return await bonusNumberList   
            } catch (error) {
                this.printErrorMessage(error.message);
            }
        }
    }

    static getNumberList(numbers){
        const numberList = numbers.split(',')
        for (let i = 0; i < numberList.length ; i++) {
            numberList[i] = Number(numberList[i]);
        }
        return numberList
    }

    static printErrorMessage(errorMessage) {
        Console.print(errorMessage)
    }

}