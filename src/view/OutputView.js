import { Console } from '@woowacourse/mission-utils';
import { LOTTO_INFO } from '../constant/index.js';

class OuputView {
  static OUTPUT_MESSAGE = Object.freeze({
    INTRO_LOTTO_WINNING: '\n당첨 통계\n---',
    RANK_INFO: Object.freeze({
      1: '6개 일치 (2,000,000,000원)',
      2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
      3: '5개 일치 (1,500,000원)',
      4: '4개 일치 (50,000원)',
      5: '3개 일치 (5,000원)',
    }),
    COUNT: (count) => `${count}개`,
    RATE_OF_RETURN: (percentage) => `총 수익률은 ${percentage}%입니다.`,
  });

  static printMessage(value) {
    Console.print(value);
  }

  static printLottoList(lottoNumbers) {
    Console.print(`\n${lottoNumbers.length}개를 구매했습니다.`);
    Console.print(`${lottoNumbers.map((item) => `[${item.join(', ')}]`).join('\n')}`);
  }

  static printLottoWinning(lottosRankCount) {
    Console.print(this.OUTPUT_MESSAGE.INTRO_LOTTO_WINNING);

    for (let i = 1; i <= LOTTO_INFO.MIN_RANK; i += 1) {
      Console.print(
        `${this.OUTPUT_MESSAGE.RANK_INFO[i]} - ${this.OUTPUT_MESSAGE.COUNT(lottosRankCount[i])}`,
      );
    }
  }

  static printProfitPercentage(percentage) {
    Console.print(this.OUTPUT_MESSAGE.RATE_OF_RETURN(percentage));
  }
}

export default OuputView;
