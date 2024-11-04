import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";
import LOTTO_GAME from "../constants/lottoGame.js";

const output = {
  lottosCount(count) {
    Console.print(MESSAGES.PURCHASE_RESULT_COUNT(count));
  },
  WINNING_STATISTICS: "\n당첨 통계\n---",
  PRIZE: [
    (count) => `6개 일치, (${LOTTO_GAME.WINNING_MONEY[0]}원)- ${count}개`,
    (count) => `5개 일치, 보너스 볼 일치 (${LOTTO_GAME.WINNING_MONEY[1]}원)- ${count}개`,
    (count) => `5개 일치, (${LOTTO_GAME.WINNING_MONEY[2]}원)- ${count}개`,
    (count) => `4개 일치, (${LOTTO_GAME.WINNING_MONEY[3]}원)- ${count}개`,
    (count) => `3개 일치, (${LOTTO_GAME.WINNING_MONEY[4]}원) - ${count}개`,
  ],
};

export default output;
