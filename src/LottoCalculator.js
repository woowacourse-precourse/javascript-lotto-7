import Lotto from './Lotto.js';
import { PRIZE_MONEY } from './constant.js';
import { Console } from '@woowacourse/mission-utils';

class LottoCalculator {
    #winningNumber;
    #bonusNumber;

    constructor(winningNumber, bonusNumber) {
        this.#validateWinning(winningNumber);
        this.#winningNumber = winningNumber;
        this.#validateBonus(winningNumber, bonusNumber);
        this.#bonusNumber = Number(bonusNumber);
    }

    #validateWinning(winningNumber) {
        if (!/^[0-9,]+$/.test(winningNumber)) {
            throw new Error('[ERROR] 숫자와 쉼표 외에는 입력할 수 없습니다.');
        }
        /*if (winningNumber.some((x) => 1 <= x <= 45)) {
            throw new Error('[ERROR] 당첨 번호는 1~45 숫자여야 합니다.');
        }*/
        if (new Set(winningNumber).size !== winningNumber.length) {
            throw new Error('[ERROR] 당첨 번호는 중복되면 안됩니다.');
        }
        if (winningNumber.length !== 6) {
            throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
        }
    }

    #validateBonus(winningNumber, bonusNumber) {
        if (!/^[0-9]*$/.test(bonusNumber)) {
            throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
        }
        /*if (1 <= bonusNumber <= 45) {
            throw new Error('[ERROR] 보너스 번호는 1~45 숫자여야 합니다.');
        }*/
        if (winningNumber.includes(bonusNumber)) {
            throw new Error(
                '[ERROR] 보너스 번호는 당첨번호와 중복되면 안됩니다.'
            );
        }
    }

    calculateResult(lottoNumber) {
        return lottoNumber.map((numbers) => {
            const ONE_LOTTO = new Lotto(numbers);
            return ONE_LOTTO.compareWinning(
                this.#winningNumber,
                this.#bonusNumber
            );
        });
    }
}

export default LottoCalculator;
