import { Console } from "@woowacourse/mission-utils";
import { RESULT_DESCRIPTION } from "../Message/Message.js";

class ConsoleView {
  static async readPriceInput() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  static printLottoPurchaseCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) => {
      Console.print(lotto.getLotto());
    });
  }

  static async readWinningNumbers() {
    return await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  }

  static async readBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  static printLottoResult(lottoResult) {
    Console.print("\n당첨 통계\n---");
    for (var i=0; i<lottoResult.length; i++) {
        Console.print(`${RESULT_DESCRIPTION[i]} - ${lottoResult[i]}개`);
    }
  }

  static printReturnRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default ConsoleView;
