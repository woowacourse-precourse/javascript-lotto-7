import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";
import LottoController from "../controllers/LottoController.js";

class ConsoleView {
  async getPurchaseAmount() {
    const validator = new Validator();
    const purchaseAmount = await Console.readLineAsync("구매금액을 입력해 주세요.\n");
    validator.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  async getWinningNumbers() {
    const validator = new Validator();
    const lottoController = new LottoController();
    const winningNumbersInput = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    validator.validateWinningNumbersInput(winningNumbersInput);
    const winningNumbers = lottoController(winningNumbersInput);
    validator.validateDuplicateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  printLottoCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount / 1000}개를 구매했습니다.`)
  }

  printLottoNumbers(lottos) {
    for (let index = 0; index < lottos.length; index++) {
      const numbers = lottos[index].LottoNumbers;
      Console.print(numbers);
    }
  }
}

export default ConsoleView;