import { Console } from '@woowacourse/mission-utils';
import { validateMoneyUnit, validateIsNumber, validateWinnerNumbers, validateBonusNumber } from './errors.js';

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

    async getWinner() {
        while (true) {
            const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
            const validatedInput = this.validateWinnerHandler(userInput);
            if (validatedInput !== null) return validatedInput;
        }
    }

    validateWinnerHandler(userInput) {
        try {
            const numbers = this.validateWinnerInput(userInput);
            return numbers;
        } catch (error) {
            Console.print(`${error.message}`);
            return null;
        }
    }

    validateWinnerInput(userInput) {
        const numbers = userInput.split(',').map(num => parseInt(num.trim(), 10));
        validateWinnerNumbers(numbers);
        return numbers;
    }

    async getBonus(winnerNumbers) {
        while (true) {
            const userInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
            const validatedInput = this.validateBonusHandler(userInput, winnerNumbers);
            if (validatedInput !== null) return validatedInput;
        }
    }

    validateBonusHandler(userInput, winnerNumbers) {
        try {
            const bonus = this.validateBonusInput(userInput, winnerNumbers);
            return bonus;
        } catch (error) {
            Console.print(`${error.message}`);
            return null;
        }
    }

    validateBonusInput(userInput, winnerNumbers) {
        const bonus = parseInt(userInput, 10);
        validateBonusNumber(bonus, winnerNumbers);
        return bonus;
    }
}

export default Input;
