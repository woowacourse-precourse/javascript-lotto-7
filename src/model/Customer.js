import Lotto from "../Lotto.js";
import LottoChecker from "./LottoChecker.js";
import { Console } from "@woowacourse/mission-utils";

export default class Customer {
  #purchaseAmount;
  #lottoNumbersList = [];
  #lottoRankResults = [0, 0, 0, 0, 0, 0];  // index = 결과 등수
  #lottoCount;
  #profitRate;
  #profit = 0;

  #valid(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0)
      throw new Error("[ERROR] 구매금액은 1000원 단위이어야합니다.");
  }

  purchaseLotto(purchaseAmount) {
    this.#valid(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount/1000;
  }

  getLottoNumberList() {
    Array.from({ length: this.#lottoCount }).forEach(() => {
      const lottoNumbers = LottoChecker.generateLottoNumbers();
      this.#lottoNumbersList.push(lottoNumbers);
    })
  }

  getLottoResults(lottoChecker) {
    this.#lottoNumbersList.forEach(lottoNumbers => {
      const rank = lottoChecker.getLottoRank(lottoNumbers);
      this.#lottoRankResults[rank] += 1;
    })
  }

  lottoNumbersPrint() {
    Console.print(`${this.#lottoCount}개를 구매했습니다.\n`);
    this.#lottoNumbersList.forEach((lottoNumbers) => {
      Console.print(`${lottoNumbers}\n`);
    })
  }

  calculateProfit() {
    const prizeAmounts = [0, 2000000000, 30000000, 1500000, 50000, 5000];

    this.#lottoRankResults.forEach((count, rank) => {
      this.#profit += count * prizeAmounts[rank];
    });

    this.#profitRate = Math.round((this.#profit / this.#purchaseAmount) * 10000) / 100;
  }

  lottoResultPrint() {
    Console.print("당첨 통계\n---\n");
    Console.print(`3개 일치 (5,000원) - ${this.#lottoRankResults[5]}개\n4개 일치 (50,000원) - ${this.#lottoRankResults[4]}개\n5개 일치 (1,500,000원) - ${this.#lottoRankResults[3]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#lottoRankResults[2]}개\n6개 일치 (2,000,000,000원) - ${this.#lottoRankResults[1]}개\n총 수익률은 ${this.#profitRate}%입니다.\n
      `)
  }

}