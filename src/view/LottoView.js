import { Console } from "@woowacourse/mission-utils";

export class LottoView {
  static async getPurchaseAmount() {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  static async printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto, index) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  static async getWinningNumbers() {
    return Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  }

  static async getBonusNumber() {
    return Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  static printResults(results) {
    Console.print("당첨 통계---");
    results.forEach((result) => Console.print(result));
    Console.print(`총 수익률은 ${results.totalReturn}%입니다.`);
  }
}