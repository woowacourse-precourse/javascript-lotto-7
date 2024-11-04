import { Console } from "@woowacourse/mission-utils";

class Output {
  static async printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  static async printLottoNumbers(lottoNumbers) {
    Console.print(`[${lottoNumbers.join(", ")}]`);
  }

  static async printWinningResult(result) {
    Console.print("\n당첨 통계\n");
    Console.print("---\n");
    Console.print(result);
  }

  static async printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Output;
