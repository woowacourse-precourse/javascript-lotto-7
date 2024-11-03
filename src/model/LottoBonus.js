import * as numberConfig from '../config/numberConfig.js'
import Lotto from '../Lotto.js';

class LottoBonus {
    #number;

    constructor(bonusNumber, winningNumbers) {
        this.#validateNumbersRange(bonusNumber);
        this.#validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
        this.#number = bonusNumber;
    }

    getBonusNumber() {
        return this.#number;
    }
    
    #validateNumbersRange(bonusNumber) {
        if ( numberConfig.LOTTO_NUM_RANGE.MIN > bonusNumber || numberConfig.LOTTO_NUM_RANGE.MAX < bonusNumber) {
          throw new Error('\n[ERROR] 보너스 번호는 1부터 45사이의 숫자만 입력할 수 있습니다.')
        }
    }
    
    #validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
      const allWinningNumbers = [...winningNumbers,bonusNumber];
      const uniqueNumbers = new Set(allWinningNumbers);
      if (uniqueNumbers.size !== allWinningNumbers.length) {
        throw new Error('[ERROR] 보너스 번호는 당첨 번호와 다른 숫자를 입력해야 합니다.')
      }
    }
}

export default LottoBonus;