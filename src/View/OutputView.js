import { Console } from "@woowacourse/mission-utils";
import { OUPUT_MESSAGE, RESULT_MESSAGE } from "../utils/Message.js"

class OutputView {
  AmountPrint(amount) {
    Console.print(`${amount / 1000}개를 구매했습니다.`);
  }
  LottoPrint(lottos) {
    for (let lotto of lottos) {
      Console.print(`[${lotto.getLotto().join(", ")}]`);
    }
  }
  ResultPrint(arr) {
    Console.print("");
    Console.print(OUPUT_MESSAGE.RESULT_OUTPUT);
    Console.print(OUPUT_MESSAGE.LINE_OUTPUT);
    Console.print(`${RESULT_MESSAGE.THREE_COUNT} ${arr[3]}개 `);
    Console.print(`${RESULT_MESSAGE.FOUR_COUNT} ${arr[4]}개`);
    Console.print(`${RESULT_MESSAGE.FIVE_COUNT} ${arr[5]}개`);
    Console.print(`${RESULT_MESSAGE.BONUS_COUNT} ${arr["bonus"]}개`);
    Console.print(`${RESULT_MESSAGE.SIX_COUNT} ${arr[6]}개`);
  }
  PercentPrint(amount, sum) {
    if (sum === 0) {
      Console.print(OUPUT_MESSAGE.ZERO_OUTPUT);
      return;
    }
    Console.print(`총 수익률은 ${((sum / amount) * 100).toFixed(1)}%입니다.`);
  }
}
export default OutputView;
