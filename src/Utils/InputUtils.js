import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, CONSTANTS } from './Constants.js';

export default class InputUtils {

    static async inputPurchaseAmount() {
        return await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT_INPUT);
    }

    static async getNumberOfPurchase(purchaseAmount) {
        const numberOfPurchase = purchaseAmount / CONSTANTS.LOTTO_PRICE;
        return numberOfPurchase
    }

}