import { LOTTO_CONFIG, ERROR } from '../constants/index.js';

class InputValidation {
    static validateMoney(money) {
        const amount = Number(money);
        this.#validateNumber(amount);
        if (amount % LOTTO_CONFIG.PRICE_UNIT !== 0) {
            this.#handleError(ERROR.MONEY.INVALID_MONEY);
        }
        if (amount > LOTTO_CONFIG.MAX_MONEY) {
            this.#handleError(ERROR.MONEY.EXCEED_MONEY);
        }

        return amount;
    }

    static validateWinningNumbers(numbers) {
        const winningNumbers = numbers.split(',').map((num) => {
            const number = Number(num.trim());
            this.#validateNumber(number);
            return number;
        });
        this.#validateNumberLength(winningNumbers);
        this.#validateDuplicateNumbers(winningNumbers);

        winningNumbers.forEach((number) => {
            this.#validateNumberRange(number);
        });

        return winningNumbers;
    }

    static validateBonusNumber(number, winningNumbers) {
        const bonusNum = Number(number);
        this.#validateNumber(bonusNum);
        this.#validateNumberRange(bonusNum);

        if (winningNumbers.includes(bonusNum)) {
            this.#handleError(ERROR.NUMBER.DUPLICATE_BONUS);
        }

        return bonusNum;
    }

    static #validateNumberLength(numbers) {
        if (numbers.length !== LOTTO_CONFIG.LENGTH) {
            this.#handleError(ERROR.NUMBER.INVALID_LENGTH);
        }
    }

    static #validateDuplicateNumbers(numbers) {
        if (new Set(numbers).size !== LOTTO_CONFIG.LENGTH) {
            this.#handleError(ERROR.NUMBER.DUPLICATE_NUMBER);
        }
    }

    static #validateNumberRange(number) {
        if (number < LOTTO_CONFIG.MIN_NUM || number > LOTTO_CONFIG.MAX_NUM) {
            this.#handleError(ERROR.NUMBER.INVALID_RANGE);
        }
    }

    static #validateNumber(value) {
        if (isNaN(value)) {
            this.#handleError(ERROR.NUMBER.NOT_A_NUMBER);
        }
        if (value <= 0) {
            this.#handleError(ERROR.NUMBER.NOT_A_NUMBER);
        }
        if (value !== parseInt(value)) {
            this.#handleError(ERROR.NUMBER.NOT_A_NUMBER);
        }
    }

    static #handleError(message) {
        throw new Error(message);
    }
}

export default InputValidation;
