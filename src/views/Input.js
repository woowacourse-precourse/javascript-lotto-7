import { InputValidation } from '../validation/index.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
    static async #readLine(sentence) {
        const inputValue = await MissionUtils.Console.readLineAsync(
            `${sentence}\n`
        );
        return inputValue;
    }

    static async getMoney() {
        const money = await this.#readLine('구입금액을 입력해 주세요.');
        return InputValidation.validateMoney(money);
    }

    static async getWinNumbers() {
        const winNumbers = await this.#readLine('당첨 번호를 입력해 주세요.');
        return InputValidation.validateWinningNumbers(winNumbers);
    }

    static async getBonusNumber(winningNumbers) {
        const bonusNumber = await this.#readLine(
            '보너스 번호를 입력해 주세요.'
        );
        return InputValidation.validateBonusNumber(bonusNumber, winningNumbers);
    }
}

export default Input;
