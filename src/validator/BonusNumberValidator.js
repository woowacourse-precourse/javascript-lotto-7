import ErrorMessages from "../constant/ErrorMessage.js";

class BonusNumberValidator {
    checkBonusNumberDuplicate(bonusNumber, winningNumber = []) {
        if (winningNumber.includes(bonusNumber)) {
            throw new Error(ErrorMessages.BONUS_NUMBER_DUPLICATE);
        }
    }

    checkBonusNumberIsNumber(bonusNumber) {
        if (isNaN(bonusNumber)) {
            throw new Error(ErrorMessages.BONUS_NUMBER_RANGE);
        }
    }

    checkBonusNumberIsEmpty(bonusNumber) {
        if (String(bonusNumber).trim() === "") {
            throw new Error(ErrorMessages.BONUS_NUMBER_RANGE);
        }
    }

    checkBonusNumberRange(bonusNumber) {
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error(ErrorMessages.BONUS_NUMBER_RANGE);
        }
    }

    processTrimAndParseBonusNumber(bonusNumber) {
        if (typeof bonusNumber === "string") {
            return parseInt(bonusNumber.trim(), 10);
        }
        return bonusNumber;
    }

    validateBonusNumber(inputBonusNumber, winningNumber = []) {
        const bonusNumber = this.processTrimAndParseBonusNumber(inputBonusNumber);
        this.checkBonusNumberDuplicate(inputBonusNumber, winningNumber);
        this.checkBonusNumberIsEmpty(bonusNumber);
        this.checkBonusNumberIsNumber(bonusNumber);
        this.checkBonusNumberRange(bonusNumber);
        return bonusNumber;
    }
}

export default BonusNumberValidator;