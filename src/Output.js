import { Console } from "@woowacourse/mission-utils";
import {
  PRIZE_MESSAGES,
  PURCHASE_MESSAGE,
  ROI_MESSAGES,
  WINNING_PRIZE,
} from "./Constants";
import RankChecker from "./RankChecker";

class Output {
  constructor(
    userPurchaseAmount,
    winningAndBonusNumber,
    totalLottoCount,
    purchasedLottos
  ) {
    this.userPurchaseAmount = userPurchaseAmount;
    this.winningAndBonusNumber = winningAndBonusNumber;
    this.totalLottoCount = totalLottoCount;
    this.sortedPurchasedLottos = this.#sortLottoNumbers(purchasedLottos);
  }

  #sortLottoNumbers(purchasedLottos) {
    return purchasedLottos.map((lotto) => {
      return lotto.sort((a, b) => a - b);
    });
  }

  printSortedLottoNumbers() {
    Console.print(`${this.totalLottoCount}${PURCHASE_MESSAGE}`);
    this.sortedPurchasedLottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  printResult() {
    const matchCounts = RankChecker.checkMatch(
      this.sortedPurchasedLottos,
      this.winningAndBonusNumber
    );

    const resultObj = RankChecker.getRank(matchCounts);

    Console.print(PRIZE_MESSAGES.TITLE);
    Console.print(PRIZE_MESSAGES.SEPARATOR);
    Console.print(`${PRIZE_MESSAGES.FIFTH} ${resultObj.FIFTH_PLACE}개`);
    Console.print(`${PRIZE_MESSAGES.FOURTH} ${resultObj.FOURTH_PLACE}개`);
    Console.print(`${PRIZE_MESSAGES.THIRD} ${resultObj.THIRD_PLACE}개`);
    Console.print(`${PRIZE_MESSAGES.SECOND} ${resultObj.SECOND_PLACE}개`);
    Console.print(`${PRIZE_MESSAGES.FIRST} ${resultObj.FIRST_PLACE}개`);

    return (
      WINNING_PRIZE.FIFTH_PLACE * resultObj.FIFTH_PLACE +
      WINNING_PRIZE.FOURTH_PLACE * resultObj.FOURTH_PLACE +
      WINNING_PRIZE.THIRD_PLACE * resultObj.THIRD_PLACE +
      WINNING_PRIZE.SECOND_PLACE * resultObj.SECOND_PLACE +
      WINNING_PRIZE.FIRST_PLACE * resultObj.FIRST_PLACE
    );
  }

  calculateROI() {
    const profitRate = (this.printResult() / this.userPurchaseAmount) * 100;
    Console.print(
      ROI_MESSAGES.RESULT.replace("${value}", Number(profitRate.toFixed(2)))
    );
  }
}

export default Output;
