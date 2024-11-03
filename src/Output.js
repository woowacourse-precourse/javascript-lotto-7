import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/message.js";

class Output {
  static printLottoCount(lottoCount) {
    Console.print(`${lottoCount}${OUTPUT_MESSAGE.PURCHASED_COUNT}`);
  }

  static printPurchasedLottoNumber(lottoNumber) {
    Console.print(`[${lottoNumber.join(", ")}]`);
  }

  static printLottoResult(lottoResult) {
    Console.print(OUTPUT_MESSAGE.PRIZE_STATISTICS);
    Console.print(`${OUTPUT_MESSAGE.FIFTH_PRIZE}${lottoResult[4]}개`);
    Console.print(`${OUTPUT_MESSAGE.FOURTH_PRIZE}${lottoResult[3]}개`);
    Console.print(`${OUTPUT_MESSAGE.THIRD_PRIZE}${lottoResult[2]}개`);
    Console.print(`${OUTPUT_MESSAGE.SECOND_PRIZE}${lottoResult[1]}개`);
    Console.print(`${OUTPUT_MESSAGE.FIRST_PRIZE}${lottoResult[0]}개`);
  }

  static printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  static printErrorMessage(error) {
    Console.print(`[ERROR] ${error.message}`);
  }
}

export default Output;
