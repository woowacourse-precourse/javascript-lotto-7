import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../Validator';

export async function inputAmount() {
  const amount = await Console.readLineAsync('구매금액을 입력해주세요.\n');
  validateAmount(amount);
}
