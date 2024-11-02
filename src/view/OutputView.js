import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(`${tickets}개를 구매했습니다.`);
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers}]\n`);
  },
};

export default OutputView;
