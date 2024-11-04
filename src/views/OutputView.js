import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../config/messages.js';

class OutputView {
  //구매한 로또 수량 출력
  static displayLottoCount(count) {
    Console.print(`${MESSAGES.LOTTO_PURCHASED(count)}`);
  }

  //생성된 로또 번호 출력 (오름차순 정렬)
  static displayLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  //당첨 통계 출력
  //각 등수별 당첨 개수 및 당첨금 출력
  static displayWinningStatistics(results) {
    Console.print('\n당첨 통계\n---');
    const resultMessages = {
      match3: '3개 일치 (5,000원)',
      match4: '4개 일치 (50,000원)',
      match5: '5개 일치 (1,500,000원)',
      match5PlusBonus: '5개 일치, 보너스 볼 일치 (30,000,000원)',
      match6: '6개 일치 (2,000,000,000원)',
    };

    Object.entries(resultMessages).forEach(([key, message]) => {
      const count = results[key] || 0;
      Console.print(`${message} - ${count}개`);
    });
  }

  //총 수익률 출력 (소수점 첫째 자리까지)
  static displayYield(yieldRate) {
    Console.print(MESSAGES.YIELD_MESSAGE(yieldRate));
  }

  //에러 메시지 출력
  static displayErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  }
}

export default OutputView;
