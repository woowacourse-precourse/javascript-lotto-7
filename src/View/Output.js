import { Console } from '@woowacourse/mission-utils';

class Output {
  static printLottoCount(purchaseCount) {
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  }

  static printLottoList(userLottoList) {
    userLottoList.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`); // 배열 형식으로 출력
    });
  }

  static printLotteryStatistics(lotteryStatistics) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Object.keys(lotteryStatistics).forEach((count) => {
      const statistic = lotteryStatistics[count];
      if (count === '5') {
        Console.print(
          `${count}개 일치 (${statistic['보너스 번호'][false].당첨금액}원) - ${statistic['보너스 번호'][false].개수}개`,
        );
        Console.print(
          `${count}개 일치, 보너스 볼 일치 (${statistic['보너스 번호'][true].당첨금액}원) - ${statistic['보너스 번호'][true].개수}개`,
        );
      } else {
        Console.print(
          `${count}개 일치 (${statistic.당첨금액}원) - ${statistic.개수}개`,
        );
      }
    });
  }

  static printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Output;
