import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    constructor() {
        this.purchaseAmount = 0;
        this.winningNumbers = [];
        this.bonusNumber = 0;
    }

    // 로또 구입 금액 입력
    async inputPurchaseAmount() {
        const input = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.");
        this.purchaseAmount = Number(input);
    }

    // 당첨 번호 입력
    async inputWinningNumbers() {
        const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
        this.winningNumbers = input.split(',').map(num => parseInt(num, 10));
    }

    // 보너스 번호 입력
    async inputBonusNumber() {
        const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
        this.bonusNumber = Number(input);
    }
}

export default UserInput;
