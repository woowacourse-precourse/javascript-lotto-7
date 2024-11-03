import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { GameOutput } from "./woowahanOutput.js";

export default class LottoStore {
  #countLotto = 0;
  #winRanking = Array(4).fill(0);
  #fiveEqualWithBonusCount = 0;
  #winPrize = [5000, 50000, 1500000, 2000000000];
  #bonusPrize = 30000000;

  generateLottos() {
    const lottos = [];

    for (let i = 0; i < this.#countLotto; i++) {
      const generateNumber = Random
        .pickUniqueNumbersInRange(1, 45, 6)
        .sort((a, b) => a - b);

      const lotto = new Lotto(generateNumber);
      lottos.push(lotto);
      GameOutput.printLottoOneLine(generateNumber);
    }

    return lottos;
  }

  checkLotto(lottos, winNumber, bonusNumber) {
    lottos.forEach((lotto) => {
      this.lottoCriteria(winNumber, bonusNumber, lotto.getNumbers());
    });
  }

  lottoCriteria(winNumber, bonusNumber, lottoNumber) {
    const matchCount = lottoNumber.filter(num => winNumber.includes(num)).length;
    const hasBonus = lottoNumber.includes(bonusNumber);
    this.keepRecord(matchCount, hasBonus);
  }

  keepRecord(matchCount, hasBonus) {
    if (matchCount === 6) {
      this.#winRanking[3]++;
      return
    }
    if (matchCount === 5 && hasBonus) {
      this.#fiveEqualWithBonusCount++;
      return
    }
    if (matchCount >= 3) {
      this.#winRanking[matchCount - 3]++;
      return
    }
  }

  resultRankingAnnounce() {
    let earn = 0;

    for (let n = 0; n < 4; n++) {
      GameOutput.printGeneralRanking(n+3,this.#winPrize[n].toLocaleString(),this.#winRanking[n]);
      earn += this.#winRanking[n] * this.#winPrize[n];
      if (n === 2) {
        GameOutput.printBonusRanking(this.#bonusPrize.toLocaleString(),this.#fiveEqualWithBonusCount);
        earn += this.#fiveEqualWithBonusCount * this.#bonusPrize;
      }
    }

    return earn
  }

  getLottoTicketCount(input) {
    const inputNumber = Number(input);
    this.#countLotto = Math.floor(inputNumber / 1000);
    return this.#countLotto;
  }
}