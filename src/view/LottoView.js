import { Console } from "@woowacourse/mission-utils";
import { UTILS } from "../common/constants.js";
import Lotto from "../model/Lotto.js";

export class LottoView {
  static async getPurchaseAmount() {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  static async printLottos(lottos) {
    Console.print("");
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto, index) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        if (!input) {
          throw new Error("[ERROR] 당첨번호를 입력해야 합니다.");
        }

        if (!UTILS.number_comma.test(input)) {
          throw new Error("[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.");
        }

        const numbers = input.split(UTILS.comma).map(Number);
        if (numbers.some(num => !UTILS.positive_integer.test(num.toString()))) {
          throw new Error("[ERROR] 당첨 번호는 양의 정수로 입력해야 합니다.");
        }

        new Lotto(numbers);
        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumber() {
    Console.print("");
    return Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  static printResults(results) {
    Console.print("");
    Console.print("당첨 통계\n---");
    results.forEach((result) => Console.print(result));
    Console.print(`총 수익률은 ${results.totalReturn}%입니다.`);
  }
}