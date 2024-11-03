import { Console } from '@woowacourse/mission-utils';
import { validateMoneyUnit, validateIsNumber } from './errors.js';

class Input {
    async getMoney() {
        while (true) {
            const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
            const validatedInput = this.validateMoneyHandler(userInput);
            if (validatedInput !== null) return validatedInput;
        }
    }

    validateMoneyHandler(userInput) {
        try {
            this.validateMoneyInput(userInput);
            return parseInt(userInput, 10);
        } catch (error) {
            Console.print(`${error.message}`);
            return null;
        }
    }

    validateMoneyInput(userInput) {
        validateIsNumber(userInput);
        validateMoneyUnit(userInput);
    }
}

export default Input;
