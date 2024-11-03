import { Console } from '@woowacourse/mission-utils';
import { QUERIES } from '../constants/userMessages.js';
import Validator from './Validator.js';

class UserInterface {
    static async queryPaymentAmout() {
        const input = await Console.readLineAsync(QUERIES.PAYMENT_AMOUNT);
        const paymentAmount = parseInt(input);
        Validator.validatePaymentAmount(paymentAmount);

        return paymentAmount;
    }
}

export default UserInterface;
