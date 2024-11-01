import WinningNumbersError from "../errors/WinningNumbersError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";

class WinningNumbers {

    static MIN_NUMBER = 1;

    static MAX_NUMBER = 45;

    static WINNING_NUMVER_COUNT = 6;

    #winningNumbers;

    constructor(winningNumbers) {
        this.#winningNumbers = winningNumbers;
        this.#validate();
    }

    static getWinningNumbers(inputWinningNumbers) {
        const sortNumbers = inputWinningNumbers.split(',').map(Number).sort((a, b) => a - b);
        const winningNumbersInstantce = new WinningNumbers(sortNumbers);
        return winningNumbersInstantce.#winningNumbers;
    }
    
    #validate() {
        this.validateWinningNumbersIsNumeric();
        this.validateWinningNumbersInRange();
        this.validateWinningNumbersNotNegative();
        this.validateWinningNumbersNoDuplicates();
    }

    validateWinningNumbersIsNumeric() {
        if(this.#winningNumbers.some(isNaN)) {
            throw new WinningNumbersError(ERROR_MESSAGE.lotto_is_numeric);
        }
    }

    validateWinningNumbersInRange() {
        if(!this.#winningNumbers.every((number) => number >= WinningNumbers.MIN_NUMBER && number <= WinningNumbers.MAX_NUMBER)) {
            throw new WinningNumbersError(ERROR_MESSAGE.lotto_in_range);
        }
    }

    validateWinningNumbersNotNegative() {
        if(this.#winningNumbers.length > WinningNumbers.WINNING_NUMVER_COUNT) {
            throw new WinningNumbersError(ERROR_MESSAGE.lotto_not_negative);
        }
    }

    validateWinningNumbersNoDuplicates() {
        const uniqueNumbers = new Set(this.#winningNumbers);
        if (uniqueNumbers.size !== this.#winningNumbers.length) {
            throw new WinningNumbersError(ERROR_MESSAGE.lotto_no_duplicates);
        }
    }
}

export default WinningNumbers;