import { MissionUtils } from "@woowacourse/mission-utils";
import PurchasedLotto from "./PurchasedLotto.js";
import WinningLotto from "./WinningLotto.js";
import { LottoUtils } from "../Util/LottoUtils.js";

class LottoMachine {
  #UNIT = Object.freeze(1000);
  #RANGE = Object.freeze({
    MIN: 1,
    MAX: 45,
    TARGET: 6,
  });

  #createRandomLottoNum() {
    const randoms = MissionUtils.Random.pickUniqueNumbersInRange(
      this.#RANGE.MIN,
      this.#RANGE.MAX,
      this.#RANGE.TARGET
    );
    return LottoUtils.sortingRandomNumbers(randoms);
  }

  enterMoney(purchaseMoney) {
    return purchaseMoney / this.#UNIT;
  }

  createLottos(numOfLottos) {
    let lottos = [];
    for (let i = 0; i < numOfLottos; i++) {
      lottos = [...lottos, new PurchasedLotto(this.#createRandomLottoNum())];
    }
    return lottos;
  }

  createWinningLottos(winningNumbers, bonusNumber) {
    return new WinningLotto(winningNumbers, bonusNumber);
  }

  #rankingLottos(lottos, winningLotto) {
    lottos.map((lotto) =>
      lotto.countingMatchedTotalNumbers(
        winningLotto.getNumbers(),
        winningLotto.getBonusNumber()
      )
    );
  }

  #accTotalPrize(lottos) {
    return lottos.reduce((acc, lotto) => (acc += lotto.getRank().prize), 0);
  }

  calculateEarningRate(lottos, winningLotto, numOfLottos) {
    this.#rankingLottos(lottos, winningLotto);
    const totalPrize = this.#accTotalPrize(lottos);
    return LottoUtils.floatingNumbers(
      Number(totalPrize / (numOfLottos * this.#UNIT))
    );
  }
}

export default LottoMachine;
