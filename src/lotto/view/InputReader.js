import { input } from '../../util/IOUtil.js';
import { INPUT_MESSAGE } from '../constants/Message.js';

export async function inputPurchaseAmount() {
  const amount = await input(INPUT_MESSAGE.REQUEST_PURCHASE_AMOUNT);
  return amount;
}

export async function inputWinningNumbers() {
  const numbers = await input(INPUT_MESSAGE.REQUEST_WINNING_NUMBERS);
  return numbers;
}

export async function inputBonusNumber() {
  const number = await input(INPUT_MESSAGE.REQUEST_BONUS_NUMBER);
  return number;
}