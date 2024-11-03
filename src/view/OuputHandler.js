import { MissionUtils } from '@woowacourse/mission-utils';

class OutputHandler {
  printLottos(ticketCount, lotto) {
    MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);
    lotto.forEach((numbers) =>
      MissionUtils.Console.print(`[${numbers.join(', ')}]`),
    );
  }
  printResult(rankCounts) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rankCounts['fifth']}개`);
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${rankCounts['fourth']}개`,
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${rankCounts['third']}개`,
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts['second']}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${rankCounts['first']}개`,
    );
  }
}

export default OutputHandler;
