import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../Validator.js';
import { inputMessage } from '../constant/inputMessage.js';

export async function inputAmount() {
  const amount = await Console.readLineAsync(`${inputMessage.amount}`);
  validateAmount(amount);
  return amount;
}
