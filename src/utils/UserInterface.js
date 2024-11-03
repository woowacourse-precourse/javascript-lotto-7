import { Console } from '@woowacourse/mission-utils';
import { ANSWERS, QUERIES } from '../constants/userMessages.js';
import Validator from './Validator.js';

class UserInterface {
  static async queryPaymentAmout() {
    const input = await Console.readLineAsync(QUERIES.PAYMENT_AMOUNT);
    const paymentAmount = parseInt(input);
    Validator.validatePaymentAmount(paymentAmount);

    return paymentAmount;
  }

  static async queryWinningNumbers() {
    Console.print('');
    const input = await Console.readLineAsync(QUERIES.WINNING_NUMBERS);
    const winningNumbers = input.split(',').map((number) => parseInt(number));
    Validator.validateWinningNumbers(winningNumbers);
    
    return winningNumbers;
  }

  static printLottos(lottos) {
    Console.print('');
    Console.print(`${lottos.length}${ANSWERS.LOTTOS_PURCHASED}`);
    lottos
      .map((lotto) => lotto.getNumbers())
      .forEach((numbers) => Console.print(`[${numbers.join(', ')}]`));
  }
}

export default UserInterface;
