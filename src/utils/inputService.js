import { Console } from '@woowacourse/mission-utils';
import { validateAmount, validateBonusNumber, validateNumbers } from './validation.js';
import { inputMessage } from '../constant/ioMessage.js';
import Lotto from '../Lotto.js';

export async function inputAmount() {
  const amount = await Console.readLineAsync(`${inputMessage.amount}`);
  validateAmount(amount);
  return amount;
}

export async function inputWinningLotto() {
  const inputNumbers = await Console.readLineAsync(`${inputMessage.lotto}`);
  const validatedNumbers = validateNumbers(inputNumbers);

  const winningNumbers = new Lotto(validatedNumbers);
  return winningNumbers;
}

export async function inputBonusNumber(winningNumbers) {
  const bonusNumber = await Console.readLineAsync(`${inputMessage.bonus}`);
  validateBonusNumber(bonusNumber, winningNumbers);
  return parseInt(bonusNumber, 10);
}
