import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printLottoCount(count) {
    this.printNewLine();
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }

  static printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto}]`);
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printStatisticsLine() {
    this.printNewLine();
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
  }

  static printStatisticsResult(result, rateOfReturn) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputView;
