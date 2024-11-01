import BonusNumberError from "../errors/BonusNumberError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";

class BonusNumber {

    static MIN_NUMBER = 1;

    static MAX_NUMBER = 45;

    #bonusNumber;

    #winningNumbers;

    constructor(bonusNumber, winningNumbers) {
        this.#bonusNumber = Number(bonusNumber);
        this.#winningNumbers = winningNumbers;
        this.#validate();
    }

    static getBonusNumber(bonusNumber, winningNumbers) {
        const bonusNumberInstantce = new BonusNumber(Number(bonusNumber), winningNumbers);
        return bonusNumberInstantce.#bonusNumber;
    }

    #validate() {
        this.validateBonusNumberIsNumeric();
        this.validateBonusNumberNotEmpty();
        this.validateBonusNumberInRange();
        this.validateBonusNumberNoDuplicates();
    }

    validateBonusNumberIsNumeric() {
        if(isNaN(this.#bonusNumber)) {
            throw new BonusNumberError(ERROR_MESSAGE.bonus_number_is_numeric);
        }
    }

    validateBonusNumberNotEmpty() {
        if(this.#bonusNumber === 0 || this.#bonusNumber === '') {
            throw new BonusNumberError(ERROR_MESSAGE.input_is_empty);
        }
    }

    validateBonusNumberInRange() {
        if(this.#bonusNumber < BonusNumber.MIN_NUMBER || this.#bonusNumber > BonusNumber.MAX_NUMBER) {
            throw new BonusNumberError(ERROR_MESSAGE.bonus_number_in_range);
        }
    }

    validateBonusNumberNoDuplicates() {
        if (this.#winningNumbers.includes(this.#bonusNumber)) {
            throw new BonusNumberError(ERROR_MESSAGE.bonus_number_no_duplicates);
        }
    }
}

export default BonusNumber;