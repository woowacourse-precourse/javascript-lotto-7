class BonusNumberValidator {
    checkBonusNumberDuplicate(bonusNumber, winningNumber = []) {
        if (winningNumber.includes(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        }
    }

    checkBonusNumberIsNumber(bonusNumber) {
        if (isNaN(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
    }

    checkBonusNumberIsEmpty(bonusNumber) {
        if (String(bonusNumber).trim() === "") {
            throw new Error("[ERROR] 보너스 번호는 공백일 수 없습니다.");
        }
    }

    checkBonusNumberRange(bonusNumber) {
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
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