import {Console} from '@woowacourse/mission-utils'
import {ERROR_CODE, LOTTO, WINNING_NUMBER} from "./constants/constants.js";
import {validationCheck} from "./validation/validationCheck.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (!validationCheck.isCorrectSize(numbers, LOTTO.SIZE)) {
            throw new Error(ERROR_CODE.SIZE_OUT_OF_RANGE(LOTTO.SIZE));
        }
        if (validationCheck.hasDuplicates(numbers)) {
            throw new Error(ERROR_CODE.NUMBER_DUPLICATE)
        }
    }

    print() {
        Console.print(`[${this.#numbers.join(", ")}]`);
    }

    countLottoMatches(winningNumbers) {
        return this.#numbers.filter(num => winningNumbers.includes(num)).length
    }

    isBonusNumberMatch(bonusNumber) {
        return this.#numbers.includes(bonusNumber);
    }

    getLottoResult(winningNumbers, bonusNumber) {
        const matchNumber = this.countLottoMatches(winningNumbers);
        if (matchNumber === 5 && this.isBonusNumberMatch(bonusNumber) || matchNumber === 6) {
            return matchNumber + 1;
        }
        return matchNumber;
    }

}

export default Lotto;
