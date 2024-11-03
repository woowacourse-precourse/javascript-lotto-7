import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, CONSTANTS } from '../Constants';

export default class InputUtils {

    static async inputPurchaseAmount() {
        return await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT_INPUT);
    }

    static async getNumberOfPurchase() {
        const purchaseAmount = await this.inputPurchaseAmount();
        return purchaseAmount / CONSTANTS.LOTTO_PRICE
    }

}