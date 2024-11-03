import { MissionUtils } from "@woowacourse/mission-utils";
import Constants from "./Constants";

class LottoPurchase {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  #printPurchasesCount(purchasesCount) {
    MissionUtils.Console.print(
      purchasesCount + Constants.PURCHASE_COUNT_MESSAGES
    );
  }

  #printPurchaseLottoList(lottoList) {
    lottoList.forEach((lottoNumbers) => {
      MissionUtils.Console.print(lottoNumbers);
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
    const purchasesCount = this.#purchaseAmount / Constants.LOTTO_PRICE;
    this.#printPurchasesCount(purchasesCount);

    const purchaselottoList = this.#generateLottoNumbers(purchasesCount);
    this.#printPurchaseLottoList(purchaselottoList);

    return purchaselottoList;
  }
}

export default LottoPurchase;
