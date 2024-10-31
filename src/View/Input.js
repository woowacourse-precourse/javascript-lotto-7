import { Console } from '@woowacourse/mission-utils';

class Input {
  static async purchaseAmount() {
    try {
      const purchaseAmount =
        await Console.readLineAsync('구입금액을 입력해 주세요.');
      return purchaseAmount;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async lotteryNumber() {
    try {
      const lotteryNumber =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.');
      return lotteryNumber;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async bonusNumber() {
    try {
      const bonusNumber =
        await Console.readLineAsync('보너스 번호를 입력해 주세요.');
      return bonusNumber;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Input;
