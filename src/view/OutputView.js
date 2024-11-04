import { Console } from '@woowacourse/mission-utils';
import {
  RANK_OUTPUT_MESSAGE,
  OUTPUT_MESSAGE,
} from '../constant/outputMessage.js';

export default class OutputView {
  static lottosInformation({ lottoLength, lottoNumbersArray }) {
    Console.print(`\n${lottoLength}${OUTPUT_MESSAGE.LOTTO_LENGTH}`);
    lottoNumbersArray.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  static winningStatistics(rankMap) {
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    rankMap.forEach((count, rankName) => {
      Console.print(`${RANK_OUTPUT_MESSAGE[rankName]} - ${count}개`);
    });
  }

  static rateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`);
  }

  static error(error) {
    Console.print(error);
  }
}
