
class Validator {
    static validateMoneyPaid(moneyPaid) {
        const validators = [
            this.invalidNumber,
            this.checkAmountUnit,
            this.isPositiveNumber
        ];
        validators.forEach(validator => validator(moneyPaid));
    }

    static validateLotto(numbers) {
        try {
            if (numbers.length !== 6) {
                throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
            }
        } catch (error) {
            throw error;
        }
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
}

export default Validator;