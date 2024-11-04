import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
    static async readLine(sentence) {
        const inputValue = await MissionUtils.Console.readLineAsync(
            `${sentence}\n`
        );
        return inputValue;
    }

    static async getMoney() {
        const money = await this.readLine('구입금액을 입력해 주세요.');
        return money;
    }

    static async getWinNumbers() {
        const winNumbers = await this.readLine('당첨 번호를 입력해 주세요.');
        return winNumbers;
    }

    static async getBonusNumber() {
        const bonusNumber = await this.readLine('보너스 번호를 입력해 주세요.');
        return bonusNumber;
    }
}

export default Input;
