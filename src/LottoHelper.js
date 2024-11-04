import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constant.js';

class LottoHelper {
    #money;
    #amount;

    constructor(money) {
        const ERROR_MESSAGE = this.#validate(money);
        if (ERROR_MESSAGE) {
            throw new Error(ERROR_MESSAGE);
        }
        this.#money = money;
        this.#amount = this.#money / LOTTO_PRICE;
    }

    static async inputMoney() {
        while (true) {
            try {
                const MONEY = await Console.readLineAsync(
                    '구입금액을 입력해 주세요.\n'
                );
                new LottoHelper(MONEY);
                return MONEY;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    #validate(money) {
        if (!/^[0-9]*$/.test(money)) {
            return '[ERROR] 구입 금액은 숫자로 구성되어 있어야 합니다.';
        }
        if (money % 1000 !== 0) {
            return '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.';
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

    static makeWinningNumber(winningInput) {
        return winningInput.split(',').map(Number);
    }
}

export default LottoHelper;
