import { Console } from '@woowacourse/mission-utils';

class Input {
  static async purchaseAmount() {
    try {
      const purchaseAmount =
        await Console.readlineAsync('구입금액을 입력해 주세요.');
      return purchaseAmount;
    } catch {
      throw new Error();
    }
  }
}

export default Input;
