import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constant.js';
import validateNumber from './handleError.js';

class LottoHelper {
    #money;
    #amount;

    constructor(money) {
        this.#validate(money);
        this.#money = money;
        this.#amount = this.#money / LOTTO_PRICE;
    }

    #validate(money) {
        validateNumber(money);
        if (money % 1000 !== 0) {
            throw new Error(
                '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.'
            );
        }
    }

    drawLottoNumber() {
        Console.print(`\n${this.#amount}개를 구매했습니다.`);
        const ALL_LOTTO = [];
        for (let i = 0; i < this.#amount; i++) {
            const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6
            ).sort((a, b) => a - b);
            Console.print(`[${LOTTO_NUMBER.join(', ')}]`);
            ALL_LOTTO.push(LOTTO_NUMBER);
        }
        return ALL_LOTTO;
    }

    makeWinningNumber(winningInput) {
        return winningInput.split(',').map(Number);
    }
}

export default LottoHelper;
