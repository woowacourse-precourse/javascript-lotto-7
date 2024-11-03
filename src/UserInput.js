import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js'; 

class UserInput {
    constructor() {
        this.purchaseAmount = 0;
        this.winningNumbers = [];
        this.bonusNumber = 0;
        this.validator = new InputValidator();
    }

    // 로또 구입 금액 입력
    async inputPurchaseAmount() {
        const input = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
        this.validator.validateAmount(input); 
        this.purchaseAmount = Number(input);
    }

    // 당첨 번호 입력
    async inputWinningNumbers() {
        const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        this.winningNumbers = input.split(',').map(num => parseInt(num.trim(), 10));
        this.validator.validateWinningNumbers(this.winningNumbers); 
    }

    // 보너스 번호 입력
    async inputBonusNumber() {
        const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        this.validator.validateBonusNumber(input, this.winningNumbers);
        this.bonusNumber = Number(input); 
    }
}

export default UserInput;
