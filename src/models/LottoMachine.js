import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_STATISTICS } from "../constants/Statistics.js";

class LottoMachine {
  #sortLottoNumber(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = new Lotto(lottoNumbers);
      lottos.push(lotto.getNumbers());
    }
    return this.#sortLottoNumber(lottos);
  }

  calculateLottoStatistics(lottos, winningNumber, bonusNumber) {
    Object.values(LOTTO_STATISTICS).forEach((stat) => {
      stat.count = 0;
    });

    lottos.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumber.includes(num)
      ).length;
      const hasBonus = lotto.includes(bonusNumber);

      if (matchCount === 6) {
        LOTTO_STATISTICS.six.count += 1;
      } else if (matchCount === 5 && hasBonus) {
        LOTTO_STATISTICS.bonus.count += 1;
      } else if (matchCount === 5) {
        LOTTO_STATISTICS.five.count += 1;
      } else if (matchCount === 4) {
        LOTTO_STATISTICS.four.count += 1;
      } else if (matchCount === 3) {
        LOTTO_STATISTICS.three.count += 1;
      }
    });
  }
}

export default LottoMachine;
