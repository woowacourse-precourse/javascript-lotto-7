import { Console } from "@woowacourse/mission-utils";

class Input {
  static async getPaymentPrice() {
    const paymentPrice = (await Console.readLineAsync("구입 금액을 입력해 주세요.\n")).trim();
    return paymentPrice;
  }

  static async getWinningNumbers() {
    const winningNumbers = (await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n")).trim();
    return winningNumbers.split(",").map(Number);
  }

  static async getBonusNumbers() {
    const bonusNumbers = (await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")).trim();
    return bonusNumbers;
  }
}

export default Input;
