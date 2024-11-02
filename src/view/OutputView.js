import { Console } from "@woowacourse/mission-utils";
import { WINNING_INDEX, REWARD } from "../constants/Constants.js";

const REWARD_COMMENT = [
  {
    matchCount: "3개 일치",
    price: REWARD.THREE_MATCH,
    winningCount: WINNING_INDEX.THREE_MATCH,
  },
  {
    matchCount: "4개 일치",
    price: REWARD.FOUR_MATCH,
    winningCount: WINNING_INDEX.FOUR_MATCH,
  },
  {
    matchCount: "5개 일치",
    price: REWARD.FIFTH_MATCH,
    winningCount: WINNING_INDEX.FIFTH_MATCH,
  },
  {
    matchCount: "5개 일치, 보너스 볼 일치",
    price: REWARD.FIFTH_BONUS_MATCH,
    winningCount: WINNING_INDEX.FIFTH_BONUS_MATCH,
  },
  {
    matchCount: "6개 일치",
    price: REWARD.SIXTH_MATCH,
    winningCount: WINNING_INDEX.SIXTH_MATCH,
  },
];

class OutputView {
  constructor() {}
  printLottoNumber(lottoNumbers) {
    const lottoCount = lottoNumbers.length;
    Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let count = 0; count < lottoCount; count++) {
      Console.print(`[${lottoNumbers[count].join(", ")}]`);
    }
    Console.print("\n");
  }
  printWinningCount(winningCount) {
    Console.print("\n당첨 통계");
    Console.print("---");
    REWARD_COMMENT.forEach((item) =>
      Console.print(
        `${item.matchCount} (${item.price}원) - ${
          winningCount[item.winningCount]
        }개`
      )
    );
  }
  printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default OutputView;
