import { MESSAGES } from "./constants.js";

class BonusNumber {
    #bonusNumber

    constructor(bonusNumber, winningNumbers) {
        this.#bonusNumber = this.#validate(bonusNumber, winningNumbers);
    }

    #validate(bonusNumber, winningNumbers) {
        if (isNaN(bonusNumber)) throw new Error(MESSAGES.ERROR.BONUS_NUMBER_NOT_NUMBER);
        if (!Number.isInteger(bonusNumber)) throw new Error(MESSAGES.ERROR.BONUS_NUMBER_FLOATING_POINT_NUMBER);
        if (bonusNumber < 1 || bonusNumber > 45) throw new Error(MESSAGES.ERROR.BONUS_NUMBER_OUT_OF_RANGE);
        if (winningNumbers.includes(bonusNumber)) throw new Error(MESSAGES.ERROR.BONUS_NUMBER_DUPLICATE_WITH_WINNING_NUMBER);

        return bonusNumber;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }
}

export default BonusNumber;