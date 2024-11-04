import Lotto from "./Lotto";

export default class Customer {
  #purchaseAmount;
  #lottoNumbersList;
  #lottoCount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount/1000;
  }

  getLottoNumberList() {
    Array.from({ length: this.#lottoCount }).forEach(() => {
      const lottoNumbers = Lotto.getLottoNumberList();
      this.#lottoNumbersList.push(lottoNumbers);
    })
  }
  
}