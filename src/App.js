import { Console } from "@woowacourse/mission-utils";
import { validatePurchaseAmount, validateLottoNumbers, validateBonusNumber } from "./utils/ValidationUtils";

class App {
  async #getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return validatePurchaseAmount(input);
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map(num => parseInt(num.trim()));
    return validateLottoNumbers(numbers);
  }

  async #getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    return validateBonusNumber(input, winningNumbers);
  }
}

export default App;
