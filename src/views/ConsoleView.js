import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class ConsoleView {
  async getPurchaseAmount() {
    const validator = new Validator();
    const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validator.validatePurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  printLottoCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount / 1000}개를 구매했습니다.`)
  }

  printLottoNumbers(lottos) {
    for (let index = 0; index < lottos.length; index++) {
      const numbers = lottos[index].getLottoNumbers();
      Console.print(numbers);
    }
  }
}

export default ConsoleView;