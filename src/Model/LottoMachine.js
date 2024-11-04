import { MissionUtils } from "@woowacourse/mission-utils";
import PurchasedLotto from "./PurchasedLotto.js";
import WinningLotto from "./WinningLotto.js";
import { LottoUtils } from "../Util/LottoUtils.js";
import { EarningTable } from "../View/EarningTable.js";

class LottoMachine {
  #UNIT = Object.freeze(1000);
  #RANGE = Object.freeze({
    MIN: 1,
    MAX: 45,
    TARGET: 6,
  });
  #matchingTable;

  constructor() {
    this.#matchingTable = Object.keys(EarningTable).map((key) => [key, 0]);
  }

  getMatchingTable() {
    return this.#matchingTable;
  }

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

  #findKeyFromValue(value) {
    const tableKey = Object.entries(EarningTable).find(
      ([k, v]) => v === value
    )[0];
    this.#matchingTable = this.#matchingTable.map(([k, v]) => {
      if (k === tableKey) {
        return [k, v + 1];
      } else return [k, v];
    });
  }

  #matchingLottos(lottos) {
    lottos.forEach((lotto) => {
      this.#findKeyFromValue(lotto.getRank());
    });
  }

  calculateEarningRate(lottos, winningLotto, numOfLottos) {
    this.#rankingLottos(lottos, winningLotto);
    const totalPrize = this.#accTotalPrize(lottos);
    this.#matchingLottos(lottos);
    return LottoUtils.floatingNumbers(
      Number((totalPrize / (numOfLottos * this.#UNIT)) * 100)
    );
  }
}

export default LottoMachine;
