import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const moneyPaid = await InputView.readMoneyPaid();
    const countGame = this.getCount(moneyPaid);

    const lottos = new Lottos(countGame).getLottos();
    OutputView.writeLottos(lottos)

    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();
    Validator.validateWinningNumbersWithBonusNumber(winningNumbers, bonusNumber);

    //[ERROR] 보너스 번호 유효성 평가 요구됨
    let matches = [0, 0, 0, 0, 0, 0, 0];
    let fiveMatchWithBonus = 0;

    // 당첨 번호와 대조하기
    for (let i = 0; i < countGame; i++) {
      const arr = lottos[i].getNumbers();
      let intersection = winningNumbers.filter(x => arr.includes(x));
      matches[intersection.length] += 1;

      if (intersection.length === 5) {
        if (lottos[i].getNumbers().includes(bonusNumber)) {
          fiveMatchWithBonus += 1;
        }
      }
    }
    // 출력
    MissionUtils.Console.print("당첨 통계\n---\n");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matches[3]}`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matches[4]}`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matches[5] - fiveMatchWithBonus}`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchWithBonus}`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${matches[6]}`)

    //수익률
    let total = 5000 * matches[3] + 50000 * matches[4] + 1500000 * (matches[5] - fiveMatchWithBonus) + 30000000 * fiveMatchWithBonus + matches[6] * 2000000000
    let rateOfReturn = Math.round(total / moneyPaid * 100) / 100
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  getCount(moneyPaid) {
    return moneyPaid / 1000;
  }
}

export default App;
