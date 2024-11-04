import { Console } from '@woowacourse/mission-utils';
import {
  MatchCount,
  WINNER_PRIZE,
  RANK_STRING,
} from '../Constants/LottoConstants.js';

class Output {
  static printAllOfResult(user) {
    this.printLottoTickets(user.purchasedLottoCount, user.tickets);
    this.printAllOfWinningStatics(user.winnerRankCount);

    const profitRate = user.getProfitRate();
    this.printProfitRate(profitRate);
  }
  static printLottoTickets(ticketCount, ticekts) {
    Console.print(`${ticketCount}개를 구매했습니다.`);

    ticekts.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
  }

  static printAllOfWinningStatics(winnerRankCountResult) {
    Console.print('당첨 통계');
    Console.print('---');

    for (let key of Object.keys(winnerRankCountResult).reverse()) {
      if (key === RANK_STRING.SECOND) {
        this.printWinningStatisticWithBonusBall(key, winnerRankCountResult);
      } else {
        this.printWinningStatistic(key, winnerRankCountResult);
      }
    }
  }

  static printWinningStatistic(key, winnerRank) {
    Console.print(
      `${MatchCount[key]}개 일치 (${WINNER_PRIZE[key].toLocaleString()}원) - ${
        winnerRank[key]
      }개`
    );
  }

  static printWinningStatisticWithBonusBall(key, winnerRank) {
    Console.print(
      `${MatchCount[key]}개 일치, 보너스 볼 일치 (${WINNER_PRIZE[
        key
      ].toLocaleString()}원) - ${winnerRank[key]}개`
    );
  }
  static printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Output;
