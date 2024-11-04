
class Validator {
    static validateMoneyPaid(moneyPaid) {
        const validators = [
            this.invalidNumber,
            this.checkAmountUnit,
            this.isPositiveNumber,
            this.isZero
        ];
        validators.forEach(validator => validator(moneyPaid));
    }

    static validateWinningNumbers(winningNumbers) {
        const validators = [
            this.isSixNumbers,
            this.isNotDuplicateNumbers,
            this.isvalidNumbers,
            this.isvalidRange
        ];
        validators.forEach(validator => validator(winningNumbers));
    }

    static validateLotto(numbers) {
        this.isNotDuplicateNumbers(numbers);
    }

    static validateBonusNumber(number) {
        const validators = [
            this.invalidNumber,
            this.isvalidRange,
            this.isNotDuplicateNumbers
        ]
    }

    static validateWinningNumbersWithBonusNumber(winningNumbers, bonusNumber) {
        if (winningNumbers.includes(bonusNumber)) throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.")
    }

    static invalidNumber(number) {
        if (!Number(number)) throw new Error("[ERROR] 숫자를 입력해주세요.")
    }

    static checkAmountUnit(moneyPaid) {
        if (moneyPaid % 1000 !== 0) throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
    }

    static isPositiveNumber(number) {
        if (Number(number) < 0) throw new Error("[ERROR] 입력 값이 음수입니다.")
    }

    static isZero(number) {
        if (Number(number) === 0) throw new Error("[ERROR] 입력값이 0 입니다.")
    }

    static isSixNumbers(numbers) {
        if (numbers.length !== 6) throw new Error("[ERROR] 입력한 당첨 숫자가 6개가 아닙니다.")
    }

    static isNotDuplicateNumbers(numbers) {
        if (new Set(numbers).size !== numbers.length) throw new Error("[ERROR] 입력한 당첨 숫자간 중복된 숫자가 있습니다.")
    }

    static isvalidNumbers(numbers) {
        numbers.forEach(number => {
            if (!Number(number)) throw new Error("[ERROR] 숫자를 입력해주세요.")
        })
    }

    static isvalidRange(numbers) {
        numbers.forEach(number => {
            if (Number(number) > 45 || Number(number) < 1) throw new Error("[ERROR] 입력 값이 범위 밖에 있습니다.")
        })
    }

}

export default Validator;