import { Console } from '@woowacourse/mission-utils';
import { ANSWERS, QUERIES } from '../constants/userMessages.js';
import Validator from './Validator.js';

class UserInterface {
  static formatString(template, ...args) {
    return template.replace(/%s/g, () => args.shift());
  }

  static formatPrint(template, ...args) {
    Console.print(UserInterface.formatString(template, ...args));
  }

  static async queryPaymentAmout() {
    const input = await Console.readLineAsync(QUERIES.PAYMENT_AMOUNT);
    const paymentAmount = Number(input);
    Validator.validatePaymentAmount(paymentAmount);

    return paymentAmount;
  }

  static async queryWinningNumbers() {
    Console.print(ANSWERS.EMPTY_LINE);
    const input = await Console.readLineAsync(QUERIES.WINNING_NUMBERS);
    const winningNumbers = input.split(',').map((number) => parseInt(number));
    Validator.validateLottoNumbers(winningNumbers);
    
    return winningNumbers;
  }

  static async queryBonusNumber(winningNumbers) {
    Console.print(ANSWERS.EMPTY_LINE);
    const input = await Console.readLineAsync(QUERIES.BONUS_NUMBER);
    const bonusNumber = parseInt(input);
    Validator.validateBonusNumber(winningNumbers, bonusNumber);

    return bonusNumber;
  }

  static printLottos(lottos) {
    Console.print(ANSWERS.EMPTY_LINE);
    UserInterface.formatPrint(ANSWERS.LOTTOS_PURCHASED, lottos.length);
    lottos
      .map((lotto) => lotto.getNumbers())
      .forEach((numbers) => Console.print(`[${numbers.join(', ')}]`));
  }

  static printResult(matchCounts, totalYield) {
    Console.print(ANSWERS.EMPTY_LINE);
    Console.print(ANSWERS.RESULT_START);
    Console.print(ANSWERS.SEPARATOR);
    UserInterface.formatPrint(ANSWERS.RESULT_THIRD, matchCounts[3]);
    UserInterface.formatPrint(ANSWERS.RESULT_FOURTH, matchCounts[4]);
    UserInterface.formatPrint(ANSWERS.RESULT_FIFTH, matchCounts[5]);
    UserInterface.formatPrint(ANSWERS.RESULT_FIFTH_BONUS, matchCounts[7]);
    UserInterface.formatPrint(ANSWERS.RESULT_SIXTH, matchCounts[6]);
    UserInterface.formatPrint(ANSWERS.RESULT_TOTAL_YIELD, totalYield.toFixed(1));
  }
}

export default UserInterface;
