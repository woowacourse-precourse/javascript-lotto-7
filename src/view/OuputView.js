import { Console } from '@woowacourse/mission-utils';
import {
  RANK_OUTPUT_MESSAGE,
  OUTPUT_MESSAGE,
} from '../constant/ouputMessage.js';

export default class OutputView {
  static lottosInformation({ lottoLength, lottoNumbersArray }) {
    Console.print(`\n${lottoLength}${OUTPUT_MESSAGE.LOTTO_LENGTH}`);
    lottoNumbersArray.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  static winningStatistics(lottoRanckMap) {
    const lottoRanks = Array.from(lottoRanckMap.values());

    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    Object.values(RANK_OUTPUT_MESSAGE).forEach((message, index) => {
      Console.print(`${message} - ${lottoRanks[index]}개`);
    });
  }

  static rateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`);
  }

  static error(error) {
    Console.print(error);
  }
}
