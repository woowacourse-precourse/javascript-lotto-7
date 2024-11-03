import Lotto from "./model/Lotto.js";
import LottoRanker from "./model/LottoRanker.js";
import LottoGenerator from "./model/LottoGenerator.js";
import OutputView from "./view/OutputView.js";
import InputView from "./view/InputView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async #restart(func) {
    while (true) {
      try {
        return await func();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async run() {
    const payment = await this.#restart(() => InputView.getPayment());

    // 로또 생성
    const lottoGenerator = new LottoGenerator(payment);
    const amount = lottoGenerator.buyLotto();
    OutputView.printLottoQuantity(amount);
    const lotto = lottoGenerator.generateLotto();
    OutputView.printLottoBundle(lotto);

    // 당첨번호 및 보너스 번호 입력
    const winningNums = await this.#restart(() => InputView.getWinningNumbers());
    const winningLotto = new Lotto(winningNums);
    const bonusNum = await this.#restart(() => InputView.getBonusNumber());

    // 로또 번호와 당첨 번호 비교
    const lottoRanker = new LottoRanker(winningLotto.getNumbers(), bonusNum);
    const winning = lottoRanker.countWinning(lotto);
    const returnRate = lottoRanker.calculateReturnRate(payment);

    // 통계 출력
    OutputView.printStatistics(winning);
    OutputView.printReturnRate(returnRate);
  }
}

export default App;
