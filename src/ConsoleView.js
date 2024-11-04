import { MissionUtils } from "@woowacourse/mission-utils";

class ConsoleView {
  static async getPurchasePrice() {
    return await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  static printLottoQuantity(quantity) {
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
  }

  static printLottoNumbers(numbers) {
    numbers.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
  }

  static async getWinningNumbers() {
    return await MissionUtils.Console.readLineAsync("\n당첨번호를 입력해 주세요.\n");
  }

  static async getBonusNumber() {
    return await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
  }

  static printError(message) {
    MissionUtils.Console.print(message);
  }

  static printStatistics(lottoResults, profitRate) {
    MissionUtils.Console.print("\n당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${lottoResults[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${lottoResults[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${lottoResults[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResults[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${lottoResults[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default ConsoleView;