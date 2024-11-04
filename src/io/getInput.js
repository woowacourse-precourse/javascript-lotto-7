import { Console } from '@woowacourse/mission-utils';
import Validator from '../validate/Validator.js';

async function getPurchaseAmount() {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  const amount = parseInt(input, 10);
  Validator.validatePurchaseAmount(amount);
  return amount;
}

async function getWinningNumbers() {
  const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요. (예: 1,2,3,4,5,6)\n');
  return Validator.validateWinningNumbers(input);
}

async function getBonusNumber(winningNumbers) {
  const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  return Validator.validateBonusNumber(input, winningNumbers);
}

export { getPurchaseAmount, getWinningNumbers, getBonusNumber };
