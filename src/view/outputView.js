import { Console } from '@woowacourse/mission-utils';
import VALUES from '../constants/values.js';
import MESSAGES from '../constants/messages.js';

const outputView = {
  printError(error) {
    Console.print(error.message);
  },

  printLottoCount(lottoCount) {
    Console.print(`${VALUES.division}${lottoCount}${MESSAGES.size}`);
  },

  printUserLotto(lottoString) {
    Console.print(lottoString);
  },

  printWinningStats(winningStats) {
    Console.print(MESSAGES.winningStats);
    Console.print(winningStats);
  },

  printRate(rate) {
    const { rateOfReturn, is } = MESSAGES;

    Console.print(`${rateOfReturn}${VALUES.space}${rate}${is}`);
  },
};

export default outputView;
