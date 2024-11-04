import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/IOMessages.js';

class OutputView {
  /**
   * 구매한 로또 번호를 출력한다.
   * @param {number[][]} lottos - 로또 번호 배열
   */
  static printPurchasedLottos(lottos) {
    Console.print(OUTPUT_MESSAGES.purchased_lottos(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(OUTPUT_MESSAGES.lotto_numbers(lotto));
    });
  }

  /**
   * 로또 당첨 결과를 출력한다.
   * @param {Object} prizeCounts - 당첨 횟수 객체
   */
  static printResult(prizeCounts) {
    Console.print(OUTPUT_MESSAGES.result_header);

    OUTPUT_MESSAGES.prize_counts.forEach(({ key, message }) => {
      Console.print(`${message} - ${prizeCounts[key]}개`);
    });
  }

  /**
   * 수익률을 출력한다.
   * @param {string} ROI - 수익률 문자열
   */
  static printROI(ROI) {
    Console.print(OUTPUT_MESSAGES.roi(ROI));
  }

  /**
   * 에러 메시지를 출력한다.
   * @param {string} message - 에러 메시지
   */
  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
