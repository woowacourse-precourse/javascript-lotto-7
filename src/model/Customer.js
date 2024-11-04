import Lotto from "./Lotto.js";

export default class Customer {
  #purchaseAmount;
  #lottoNumbersList = [];
  #lottoResults = [];
  #lottoCount;

  purchaseLotto(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount/1000;
  }

  getLottoNumberList() {
    Array.from({ length: this.#lottoCount }).forEach(() => {
      const lottoNumbers = Lotto.generateLottoNumbers();
      this.#lottoNumbersList.push(lottoNumbers);
    })
  }

  getLottoResults(lotto) {
    this.#lottoNumbersList.forEach(lottoNumbers => {
      const rank = lotto.getLottoRank(lottoNumbers);
      this.#lottoResults.push(rank);
    })
  }

}