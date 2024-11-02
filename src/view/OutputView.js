import { Console } from "@woowacourse/mission-utils";
import { WINNING_INDEX, REWARD } from "../constants/Constants.js";

const REWARD_COMMENT = [
  {
    MATCH_COUNT: "3개 일치",
    PRICE: REWARD.THREE_MATCH,
    WINNING_COUNT: WINNING_INDEX.THREE_MATCH,
  },
  {
    MATCH_COUNT: "4개 일치",
    PRICE: REWARD.FOUR_MATCH,
    WINNING_COUNT: WINNING_INDEX.FOUR_MATCH,
  },
  {
    MATCH_COUNT: "5개 일치",
    PRICE: REWARD.FIFTH_MATCH,
    WINNING_COUNT: WINNING_INDEX.FIFTH_MATCH,
  },
  {
    MATCH_COUNT: "5개 일치, 보너스 볼 일치",
    PRICE: REWARD.FIFTH_BONUS_MATCH,
    WINNING_COUNT: WINNING_INDEX.FIFTH_BONUS_MATCH,
  },
  {
    MATCH_COUNT: "6개 일치",
    PRICE: REWARD.SIXTH_MATCH,
    WINNING_COUNT: WINNING_INDEX.SIXTH_MATCH,
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
        `${item.MATCH_COUNT} (${item.PRICE}원) - ${
          winningCount[item.WINNING_COUNT]
        }개`
      )
    );
  }
  printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default OutputView;
