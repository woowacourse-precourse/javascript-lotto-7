import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, CONSTANTS } from './Constants.js';
import { InputValidator } from './Validator.js';

export default class InputUtils {

    static async inputPurchaseAmount() {
        while (1) {
            try {
                const purchaseAmount = await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT_INPUT);
                InputValidator.purchaseAmountValidator(purchaseAmount);

                return purchaseAmount   
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

                return winningNumberList   
            } catch (error) {
                this.printErrorMessage(error.message);
            }
        }
    }

    static async inputBonusNumber() {
        while (1) {
            try {
                const bonusNumber = await Console.readLineAsync(MESSAGE.BONUS_NUMBER_INPUT);
                const bonusNumberList = this.getNumberList(bonusNumber);
                InputValidator.bonusNumberValidator(bonusNumberList);

                return bonusNumberList   
            } catch (error) {
                this.printErrorMessage(error.message);
            }
        }
    }

    static getNumberList(numbers){
        return numbers.split(',')
    }

    static printErrorMessage(errorMessage) {
        Console.print(errorMessage)
    }

}