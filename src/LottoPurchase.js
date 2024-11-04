import { MissionUtils } from "@woowacourse/mission-utils";
import Constants from "./Constants.js";

class LottoPurchase {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  #calculatePurchaseCount() {
    return this.#purchaseAmount / Constants.LOTTO_PRICE;
  }

  #printPurchasesCount() {
    const purchasesCount = this.#calculatePurchaseCount();

    MissionUtils.Console.print(
      `${purchasesCount}${Constants.PURCHASE_COUNT_MESSAGES}`
    );
  }

  #printPurchaseLottoList(purchaseLottoList) {
    purchaseLottoList.forEach((numbers) => {
      MissionUtils.Console.print(`[${numbers.join(Constants.DELIMITER + ' ')}]`);
    });
  }

  #generateLottoNumbers(purchasesCount) {
    const purchaselottoList = [];

    while (purchasesCount) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        Constants.LOTTO_NUMBER_MIN,
        Constants.LOTTO_NUMBER_MAX,
        Constants.LOTTO_NUMBER_COUNT
      );
      purchaselottoList.push(lottoNumbers);
      purchasesCount -= 1;
    }
    return purchaselottoList;
  }

  getPurchaseLottoList() {
    const purchasesCount = this.#calculatePurchaseCount();
    return this.#generateLottoNumbers(purchasesCount);
  }

  printPurchaseLottoList(purchaselottoList) {
    const purchaseCount = this.#calculatePurchaseCount();
    MissionUtils.Console.print(Constants.EMPTY_LINE);
    this.#printPurchasesCount(purchaseCount);
    this.#printPurchaseLottoList(purchaselottoList);
  }
}

export default LottoPurchase;
