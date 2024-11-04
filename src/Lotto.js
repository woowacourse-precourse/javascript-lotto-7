import {
    validateDuplicate,
    validateSix,
    validateRangeNumber,
} from './handleError.js';

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        validateSix(numbers, '로또 번호는');
        validateDuplicate(numbers, '로또 번호는');
        validateRangeNumber(numbers, '로또 번호는');
    }

    compareWinning(winningNumber, bonusNumber) {
        const MATCH_COUNT = this.#numbers.filter((num) =>
            winningNumber.includes(num)
        ).length;
        const BONUS_MATCH = this.#numbers.includes(bonusNumber);
        return { MATCH_COUNT, BONUS_MATCH };
    }
}

export default Lotto;
