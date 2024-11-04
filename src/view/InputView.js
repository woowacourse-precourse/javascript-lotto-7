import { Console } from "@woowacourse/mission-utils"

const InputView = {
  async getPurchaseAmount() {
    const input = await Console.readLineAsync("구입 금액을 입력해주세요.\n");
    const amount = parseInt(input);
    
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
    
    return amount;
  },

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map(Number);

    if (numbers.length !== 6 || numbers.some((num) => isNaN(num) || num < 1 || num >45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.");
    }

    return numbers;
  },

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonus = parseInt(input);

    if (isNaN(bonus) || bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    return bonus;
  }
}

export default InputView;