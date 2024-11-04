import { UserLotto } from "./UserLotto.js";
import { Console } from "@woowacourse/mission-utils";
import { LottoMarket } from "./LottoMarket.js";
import { LottoGame } from "./LottoGame.js";
import { LottoResult } from "./LottoResult.js";

class App {
  async run() {
    const userLotto = new UserLotto();
    const lottoMarket = new LottoMarket();
    const lottoGame = new LottoGame();
    const lottoResult = new LottoResult();

    try {
      const purchaseMoney = await userLotto.getLottoPurchaseInput();

      const count = userLotto.CalculateAmountCount(purchaseMoney);

      const userLottos = lottoMarket.userLottoNumbers(count);
      Console.print(`${count}개를 구매했습니다.`)
      userLottos.forEach(lotto => {
        Console.print(`[${lotto.join(", ")}]`);
      })

      await lottoGame.getWinningNumbersInput();
      const winningNumbers = lottoGame.winningNumbers.getNumbers();

      await lottoGame.getBonusNumberInput();
      const bonusNumber = lottoGame.bonusNumber;

      lottoResult.calculateNumbers(userLottos, winningNumbers, bonusNumber);
      lottoResult.printResults(purchaseMoney);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
