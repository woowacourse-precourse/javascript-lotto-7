import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./Validator.js";
import Matcher from "./Matcher.js";

class App {
  async run() {
    const moneyPaid = await InputView.readMoneyPaid();
    const countGame = this.getCount(moneyPaid);

    const lottos = new Lottos(countGame).getLottos();
    OutputView.writeLottos(lottos)

    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();
    Validator.validateWinningNumbersWithBonusNumber(winningNumbers, bonusNumber);

    const matcher = this.#generateMatcher(lottos, winningNumbers, bonusNumber)
    const { matchResult, matchFiveNumbersWithBonusNumber } = matcher.getResults();

    // 출력
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matchResult[3]}`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matchResult[4]}`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matchResult[5] - matchFiveNumbersWithBonusNumber}`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchFiveNumbersWithBonusNumber}`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${matchResult[6]}`)

    //수익률
    let total = 5000 * matchResult[3] + 50000 * matchResult[4] + 1500000 * (matchResult[5] - matchFiveNumbersWithBonusNumber) + 30000000 * matchFiveNumbersWithBonusNumber + matchResult[6] * 2000000000
    let rateOfReturn = Math.round(total / moneyPaid * 100) / 100
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn.toLocaleString('ko-KR')}%입니다.`);
  }

  getCount(moneyPaid) {
    return moneyPaid / 1000;
  }

  #generateMatcher(lottos, winningNumbers, bonusNumber) {
    return new Matcher(lottos, winningNumbers, bonusNumber);
  }
}

export default App;
