import { Console } from '@woowacourse/mission-utils';
import { validateMoneyUnit, validateIsNumber } from './errors.js';

class Input {
    async getMoney() {
        while (true) {
            const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
            const validatedInput = this.validateHandler(userInput);
            if (validatedInput !== null) return validatedInput;
        }
    }

    validateHandler(userInput) {
        try {
            this.validateInput(userInput);
            return parseInt(userInput, 10);
        } catch (error) {
            Console.print(`${error.message}`);
            return null;
        }
    }

    validateInput(userInput) {
        validateIsNumber(userInput);
        validateMoneyUnit(userInput);
    }
}

export default Input;
