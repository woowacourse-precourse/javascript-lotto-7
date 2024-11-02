import { Console } from '@woowacourse/mission-utils';
import { scan } from '../utils/scanner.js';

export const getLottoAmount = async () => {
  try {
    const price = await scan('구입금액을 입력해 주세요.');
    if (price % 1000 === 0) return price / 1000;
    throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
  } catch (err) {
    Console.print(err.message);
    return await getLottoAmount();
  }
};
