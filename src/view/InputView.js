import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);

    return payment;
  }

  static validatePayment(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }
    if (Number(payment) <= 0)
      throw new Error("[ERROR] 0이상의 금액을 입력해야 합니다.");
  }

  static async getWinningNumbers() {
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    this.validateWinningNumber(numbers);

    return numbers.split(",").map((num) => Number(num.trim()));
  }

  static validateWinningNumber(numbers) {
    const splitedNums = numbers.split(",");
    splitedNums.map((num) => {
      if (isNaN(num)) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }
      if (num > 45 || num < 1) {
        throw new Error("[ERROR] 로또 번호는 1이상 45이하를 입력해야 합니다.");
      }
    });
  }

  static async getBonusNumber() {
    const bonusNum =
      await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    this.validateBonusNumber(bonusNum);

    return Number(bonusNum);
  }

  static validateBonusNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }
    if (number > 45 || number < 1) {
      throw new Error("[ERROR] 로또 번호는 1이상 45이하를 입력해야 합니다.");
    }
  }
}

export default InputView;
