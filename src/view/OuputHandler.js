import { MissionUtils } from '@woowacourse/mission-utils';

class OutputHandler {
  printLottos(ticketCount, lotto) {
    MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);
    lotto.forEach((numbers) =>
      MissionUtils.Console.print(`[${numbers.join(', ')}]`),
    );
  }

  
}

export default OutputHandler;
