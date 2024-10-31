import { Console } from '@woowacourse/mission-utils';
import {
  MATCH_OUTPUT_MESSAGE,
  OUTPUT_MESSAGE,
} from '../constant/ouputMessage.js';

export default class OutputView {
  static printLottosInformation({ lottoLength, lottoNumbers }) {
    Console.print(`\n${lottoLength}${OUTPUT_MESSAGE.LOTTO_LENGTH}`);
    lottoNumbers.forEach((lottoNumber) => {
      Console.print(`[${lottoNumber.join(', ')}]`);
    });
  }

  static printWinningStatistics(lottoRanckMap) {
    const lottoRanks = Array.from(lottoRanckMap.values());

    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    Object.values(MATCH_OUTPUT_MESSAGE).forEach((message, index) => {
      Console.print(`${message} - ${lottoRanks[index]}개`);
    });
  }

  static printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
