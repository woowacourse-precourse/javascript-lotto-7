import Lotto from "./Lotto.js";

export default class Customer {
  #purchaseAmount;
  #lottoNumbersList = [];
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

}