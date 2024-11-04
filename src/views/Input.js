import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG, ERROR_MESSAGE } from '../constants/index.js';

class Input {
    static async readLine(sentence) {
        const inputValue = await MissionUtils.Console.readLineAsync(
            `${sentence}\n`
        );
        return inputValue;
    }

    static async getMoney() {
        const money = await this.readLine('구입금액을 입력해 주세요.');
        return this.#validateMoney(money);
    }

    static async getWinNumbers() {
        const winNumbers = await this.readLine('당첨 번호를 입력해 주세요.');
        return this.#validateWinningNumbers(winNumbers);
    }

    static async getBonusNumber() {
        const bonusNumber = await this.readLine('보너스 번호를 입력해 주세요.');
        return this.#validateBonusNumber(bonusNumber);
    }

    static #validateMoney(money) {
        const amount = Number(money);
        if (isNaN(amount)) throw new Error(ERROR_MESSAGE.MONEY.NOT_A_NUMBER);
        if (amount === 0) throw new Error(ERROR_MESSAGE.MONEY.ZERO);
        if (amount % 1000 !== 0)
            throw new Error(ERROR_MESSAGE.MONEY.INVALID_MONEY);
        if (amount > LOTTO_CONFIG.MAX_MONEY)
            throw new Error(ERROR_MESSAGE.MONEY.EXCEED_MONEY);

        return amount;
    }

    static #validateWinningNumbers(numbers) {
        const winningNumbers = numbers
            .split(',')
            .map((num) => Number(num.trim()));
        if (winningNumbers.length !== LOTTO_CONFIG.LENGTH)
            throw new Error(ERROR_MESSAGE.NUMBER.INVALID_LENGTH);
        if (new Set(winningNumbers).size !== LOTTO_CONFIG.LENGTH)
            throw new Error(ERROR_MESSAGE.NUMBER.DUPLICATE_NUMBER);
        winningNumbers.forEach((num) => {
            if (num < LOTTO_CONFIG.MIN_NUM || num > LOTTO_CONFIG.MAX_NUM)
                throw new Error(ERROR_MESSAGE.NUMBER.INVALID_RANGE);
            if (isNaN(num)) throw new Error(ERROR_MESSAGE.NUMBER.NOT_A_NUMBER);
        });
        return winningNumbers;
    }

    static #validateBonusNumber(number) {
        const bonusNum = Number(number);
        if (isNaN(bonusNum)) throw new Error(ERROR_MESSAGE.NUMBER.NOT_A_NUMBER);
        if (bonusNum < 1 || bonusNum > 45)
            throw new Error(ERROR_MESSAGE.NUMBER.INVALID_RANGE);
        // 중복 수 체크도 해야함
        return bonusNum;
    }
}

export default Input;
