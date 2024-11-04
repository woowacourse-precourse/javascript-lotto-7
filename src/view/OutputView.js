import { Console } from '@woowacourse/mission-utils';
import {
  OUTPUT_LOTTO_TICKETS,
  OUTPUT_WINNING_RESULT,
} from '../constant/constant.js';

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(OUTPUT_LOTTO_TICKETS(tickets));
  },

  printLottoNumbers(tickets, numbers) {
    for (let i = 0; i < tickets; i++) {
      Console.print(`[${numbers[i]}]`);
    }
  },

  printWinningResult(ranks, profitRate) {
    Console.print(OUTPUT_WINNING_RESULT(ranks, profitRate));
  },
};

export default OutputView;
