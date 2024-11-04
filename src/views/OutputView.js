import { MissionUtils } from '@woowacourse/mission-utils';
import RANK_STATICS_MESSAGES from '../constants/messages/rankStaticsMessages.js';

class OutputView {
  static printNewLine() {
    MissionUtils.Console.print('');
  }

  static printMessage(message) {
    MissionUtils.Console.print(message);
  }

  static printLottoCount(lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  static printWinningStaticsTitle() {
    MissionUtils.Console.print('당첨 통계');
  }

  static printWinningStaticsDivideLine() {
    MissionUtils.Console.print('---');
  }

  static printRankStatics(rankStatics) {
    RANK_STATICS_MESSAGES.forEach(({ rank, message }) => {
      this.printMessage(`${message} - ${rankStatics[rank]}개`);
    });
  }

  static printRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}

export default OutputView;
