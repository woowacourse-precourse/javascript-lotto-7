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

    summarizeResult(result) {
        const COUNT = { 3: 0, 4: 0, 5: 0, 6: 0, plus: 0 };
        result.forEach(({ MATCH_COUNT, BONUS_MATCH }) => {
            if (MATCH_COUNT === 5 && BONUS_MATCH) {
                COUNT.plus++;
                return;
            }
            if (COUNT[MATCH_COUNT] !== undefined) {
                COUNT[MATCH_COUNT]++;
            }
        });
        return COUNT;
    }

    printResult(summarizeResult) {
        Console.print(
            `3개 일치 (5,000원) - ${summarizeResult[3]}개\n` +
                `4개 일치 (50,000원) - ${summarizeResult[4]}개\n` +
                `5개 일치 (1,500,000원) - ${summarizeResult[5]}개\n` +
                `5개 일치, 보너스 볼 일치 (30,000,000원) - ${summarizeResult.plus}개\n` +
                `6개 일치 (2,000,000,000원) - ${summarizeResult[6]}개`
        );
    }

    calculateReturnRate(summarizeResult, money) {
        let totalPrize = 0;
        for (const [key, count] of Object.entries(summarizeResult)) {
            const PRIZE = PRIZE_MONEY[key] || 0;
            totalPrize += PRIZE * count;
        }
        const RATE_RETURN = ((totalPrize / money) * 100).toFixed(1);
        Console.print(`총 수익률은 ${RATE_RETURN}%입니다.`);
    }
}

export default LottoCalculator;
