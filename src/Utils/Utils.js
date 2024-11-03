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

    static printErrorMessage(errorMessage) {
        Console.print(errorMessage)
    }

}