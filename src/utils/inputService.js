import { Console } from '@woowacourse/mission-utils';
import { validateAmount, validateNumbers } from '../Validator.js';
import { inputMessage } from '../constant/ioMessage.js';
import Lotto from '../Lotto.js';

export async function inputAmount() {
  const amount = await Console.readLineAsync(`${inputMessage.amount}`);
  validateAmount(amount);
  return amount;
}

export async function inputWinningLotto() {
  const inputNumbers = await Console.readLineAsync(`${inputMessage.lotto}`);
  validateNumbers(inputNumbers);

  const winningNumbers = new Lotto(inputNumbers.split(',').map(Number));
  return winningNumbers;
}
