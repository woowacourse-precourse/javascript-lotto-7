import { Console } from "@woowacourse/mission-utils";

// input들을 관리하는 클래스
class InputHandler {
  async handleInput(prompt, validateFn) {
    while (true) {
      const input = await Console.readLineAsync(prompt);
      try {
        return validateFn(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getPurchaseAmount() {
    return this.handleInput(
      "구입금액을 입력해 주세요.\n",
      this.validatePurchaseAmount
    );
  }

  async getWinningNumber() {
    return this.handleInput(
      "\n당첨 번호를 입력해 주세요.\n",
      this.validateWinningNumber
    );
  }

  async getBonusNumber() {
    return this.handleInput(
      "\n보너스 번호를 입력해 주세요.\n",
      this.validateBonusNumber
    );
  }

  validatePurchaseAmount(input) {
    const purchaseAmount = Number(input);
    if (
      isNaN(purchaseAmount) ||
      purchaseAmount <= 0 ||
      purchaseAmount % 1000 !== 0
    )
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");

    return purchaseAmount / 1000;
  }

  validateWinningNumber(input) {
    const numbers = input.split(",").map(Number);
    if (numbers.length !== 6)
      throw new Error("[ERROR] 당첨 번호를 6개 입력해주세요.");
    if (numbers.some((number) => isNaN(number)))
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (numbers.some((number) => number < 1 || number > 45))
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");
    if (new Set(numbers).size !== numbers.length)
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");

    return numbers;
  }

  validateBonusNumber(input) {
    const bonusNumber = Number(input);
    if (isNaN(bonusNumber)) throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");

    return bonusNumber;
  }
}

export default InputHandler;
