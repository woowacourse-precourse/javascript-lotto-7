import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import Lotto from "../Lotto.js";
import { RANKING_MATCH_COUNT, RANKING_MONEY } from "../constants/Settings.js";
import { Console } from "@woowacourse/mission-utils";

class LottoModel {
  #lotto;

  constructor(amount) {
    this.#lotto = Array.from({ length: amount }).map(
      () => new Lotto(generateLottoNumbers())
    );
  }

  // 로또 출력
  getLottoTickets() {
    return this.#lotto.map((lotto) => lotto.getNumber());
  }

  // 당첨 통계 계산
  calculateMatches(inputNumbers, bonusNumber) {
    const matchCounts = {
      Rank1: 0,
      Rank2: 0,
      Rank3: 0,
      Rank4: 0,
      Rank5: 0,
    };

    this.#lotto.forEach((lotto) => {
      const lottoNumbers = lotto.getNumber();
      const matches = lottoNumbers.filter((num) =>
        inputNumbers.includes(num)
      ).length;
      const hasBonus = lottoNumbers.includes(bonusNumber);

      if (matches === RANKING_MATCH_COUNT.first && !hasBonus) {
        matchCounts.Rank1++;
      }
      if (matches === RANKING_MATCH_COUNT.second && hasBonus) {
        matchCounts.Rank2++;
      }
      if (matches === RANKING_MATCH_COUNT.third && !hasBonus) {
        matchCounts.Rank3++;
      }
      if (matches === RANKING_MATCH_COUNT.fourth && !hasBonus) {
        matchCounts.Rank4++;
      }
      if (matches === RANKING_MATCH_COUNT.fifth && !hasBonus) {
        matchCounts.Rank5++;
      }
    });

    return matchCounts;
  }

  calc_rate_of_return(matchCounts, purchaseAmount) {
    let returnMoney =
      matchCounts.Rank1 * RANKING_MONEY.first +
      matchCounts.Rank2 * RANKING_MONEY.second +
      matchCounts.Rank3 * RANKING_MONEY.third +
      matchCounts.Rank4 * RANKING_MONEY.fourth +
      matchCounts.Rank5 * RANKING_MONEY.fifth;

    const result = Math.round((returnMoney / purchaseAmount) * 100 * 100) / 100;

    return result.toFixed(1);
  }
}

export default LottoModel;
