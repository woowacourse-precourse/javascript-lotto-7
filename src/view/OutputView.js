import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(`${tickets}개를 구매했습니다.`);
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers}]\n`);
  },

  printWinningResult(ranks, profitRate) {
    Console.print(`당첨 통계 \n---`);
    Console.print(`3개 일치 (5,000원) - ${ranks.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${ranks.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${ranks.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${ranks.first}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};

export default OutputView;
