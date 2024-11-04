import { Console } from '@woowacourse/mission-utils';

class Output {
  static printLottoTickets(ticketCount, ticekts) {
    Console.print(`${ticketCount}개를 구매했습니다.`);

    ticekts.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
  }

  static printWinningStatistics() {
    Console.print('당첨 통계');
    Console.print('---');

    //TODO: 반복
    // printWinningStatistic
  }

  static printWinningStatistic(matchNumber, lottoWinningAmountString, count) {
    // 당첨 내역을 출력하는 코드
    Console.print(
      `${matchNumber}개 일치 (${lottoWinningAmountString}원) - ${count}개`
    );
  }

  static printWinningStatisticWithBonusBall(
    matchNumber,
    lottoWinningAmountString,
    count
  ) {
    // 당첨 내역을 출력하는 코드
    Console.print(
      `${matchNumber}개 일치, 보너스 볼 일치 (${lottoWinningAmountString}원) - ${count}개`
    );
  }
  static printProfitRate(profitRate) {
    // 총 수익률은 62.5%입니다.
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Output;
