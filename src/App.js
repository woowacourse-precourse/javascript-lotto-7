import { Console } from "@woowacourse/mission-utils";
import MoneyValidator from "./MoneyValidator.js";
import LottoGenerator from "./LottoGenerator.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      new MoneyValidator(money);

      const lottoGenerator = new LottoGenerator(money);
      const lottos = lottoGenerator.getLottos();
      const lottosCount = lottoGenerator.lottoCount;
      Console.print(`\n${lottosCount}개를 구매했습니다.`);
      lottos.map(lotto => {
        Console.print(lotto.sort((a, b) => a - b));
      });

      const winningNumberInput = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n",
      );

      const winningNumber = winningNumberInput
        .split(",")
        .map(number => number.trim());

      const lotto = new Lotto();
      lotto.validateWinningNumber(winningNumber);
      const additionalNumberInput = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );

      const additionalNumber = additionalNumberInput.trim();
      lotto.validateAdditionalNumber(additionalNumber);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
