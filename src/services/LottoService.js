import { Random } from '@woowacourse/mission-utils'; 
import Lotto from '../models/Lotto.js'; 
import { LOTTO_NUMBER_RANGE, LOTTO_NUM_COUNT } from '../config/lottoConfig.js';
import { PRIZES } from '../config/lottoConfig.js'; 

class LottoService {
  // 로또 번호 생성
  // 랜덤으로 중복되지 않는 6개의 번호를 생성하여 Lotto 객체로 반환
  static generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_RANGE.min,
      LOTTO_NUMBER_RANGE.max,
      LOTTO_NUM_COUNT
    );
    return new Lotto(numbers); // 생성된 번호를 Lotto 객체로 반환
  }

  // 당첨 결과 비교
  // 구매한 로또와 당첨 번호, 보너스 번호를 비교하여 당첨 등수를 반환
  static checkWinning(lottos, winningNumbers, bonusNumber) {
    return lottos.map((lotto) => {
      // 로또 번호와 당첨 번호의 일치 개수 계산
      const matchCount = lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber); // 보너스 번호 포함 여부 확인

      // 등수 판정
      if (matchCount === 6) return 'match6'; // 1등
      if (matchCount === 5 && hasBonus) return 'match5PlusBonus'; // 2등
      if (matchCount === 5) return 'match5'; // 3등
      if (matchCount === 4) return 'match4'; // 4등
      if (matchCount === 3) return 'match3'; // 5등
      return null; // 등수에 해당하지 않는 경우
    });
  }

  // 총 당첨금 계산
  // 각 등수의 당첨 개수에 따라 총 당첨금을 계산하여 반환
  static calculateTotalPrize(summary) {
    return Object.entries(summary).reduce((total, [rank, count]) => {
      // 등수에 해당하는 상금과 개수를 곱하여 총합 계산
      return total + (PRIZES[rank] || 0) * count;
    }, 0);
  }
}

export default LottoService; 
