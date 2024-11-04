import { MissionUtils } from "@woowacourse/mission-utils";
import { collectLottoNumbers, collectBonusNumber } from "./InputValidator.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const price = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );

    if (price % 1000 !== 0) {
      throw new Error("[ERROR]");
    }

    const resultprice = price / 1000;
    MissionUtils.Console.print(`${resultprice}개를 구매했습니다.`);

    const userLottos = [];
    for (let i = 0; i < resultprice; i++) {
      const lottoNumbers = Lotto.generateRandomNumbers();
      userLottos.push(new Lotto(lottoNumbers));
      MissionUtils.Console.print(`[${lottoNumbers.join(", ")}]`); // 로또 번호 출력
    }

    const winningNumbers = await collectLottoNumbers();
    const bonusNumber = await collectBonusNumber();

    const totalStatistics = Lotto.getTotalStatistics(
      userLottos,
      winningNumbers,
      bonusNumber
    );
    MissionUtils.Console.print("당첨 통계\n---");
    Object.keys(totalStatistics).forEach((key) => {
      MissionUtils.Console.print(`${key} - ${totalStatistics[key]}개`);
    });
    const totalPrize = this.calculateTotalPrize(totalStatistics);
    const yieldRate = ((totalPrize / price) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }

  calculateTotalPrize(statistics) {
    const PRIZES = {
      "3개 일치 (5,000원)": 5000,
      "4개 일치 (50,000원)": 50000,
      "5개 일치 (1,500,000원)": 1500000,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 30000000,
      "6개 일치 (2,000,000,000원)": 2000000000,
    };

    return Object.keys(statistics).reduce((total, key) => {
      return total + PRIZES[key] * statistics[key];
    }, 0);
  }
}

export default App;
