import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, LOTTO, LOTTO_PRICE, LOTTO_RANKS } from '../constant/Constants.js';

class Output {
  static lottoTiketCount(count) {
    Console.print(MESSAGE.OUTPUT.displayLottoCount(count));
  }

  static lottoNumbers(lottoTickets) {
    const lottoNumberString = lottoTickets.join(', ');
    Console.print(`[${lottoNumberString}]`);
  }

  static printResults(result, profitPercentage) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`${LOTTO.FIFTH_PLACE}개 일치 (${LOTTO_PRICE[LOTTO_RANKS.FIFTH].toLocaleString()}원) - ${result[LOTTO_RANKS.FIFTH]}개`);
    Console.print(`${LOTTO.FOURTH_PLACE}개 일치 (${LOTTO_PRICE[LOTTO_RANKS.FOURTH].toLocaleString()}원) - ${result[LOTTO_RANKS.FOURTH]}개`);
    Console.print(`${LOTTO.THIRD_PLACE}개 일치 (${LOTTO_PRICE[LOTTO_RANKS.THIRD].toLocaleString()}원) - ${result[LOTTO_RANKS.THIRD]}개`);
    Console.print(
      `${LOTTO.SECOND_PLACE}개 일치, 보너스 볼 일치 (${LOTTO_PRICE[LOTTO_RANKS.SECOND].toLocaleString()}원) - ${result[LOTTO_RANKS.SECOND]}개`,
    );
    Console.print(`${LOTTO.FIRST_PLACE}개 일치 (${LOTTO_PRICE[LOTTO_RANKS.FIRST].toLocaleString()}원) - ${result[LOTTO_RANKS.FIRST]}개`);
    Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
  }
}

export default Output;
