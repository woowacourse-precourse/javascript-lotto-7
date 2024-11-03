import { MissionUtils } from "@woowacourse/mission-utils";
import LottoUtils from "../LottoUtils.js";

class OutputView {
  static printLotto(count) {
    this.printNewLine();
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);

    const totalLottoArray = LottoUtils.range(count, []);
    const lottoArray = [];

    totalLottoArray.map(() => {
      const lotto = LottoUtils.getLottoNumber();
      const result = LottoUtils.getSortNumber(lotto);
      lottoArray.push(result);
      MissionUtils.Console.print(`[${result}]`);
    });

    return lottoArray;
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printStatisticsLine() {
    this.printNewLine();
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
  }

  static printStatisticsResult(isMatchBonusNumber, statisticsResult) {
    const { three, four, five, six, returnRate } = statisticsResult;

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${!isMatchBonusNumber}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${six}개`);
    MissionUtils.Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default OutputView;
