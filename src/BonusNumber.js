class BonusNumber {
    #bonusNumber

    constructor(bonusNumber, winningNumbers) {
        this.#bonusNumber = this.#validate(bonusNumber, winningNumbers);
    }

    #validate(bonusNumber, winningNumbers) {
        if (isNaN(bonusNumber)) throw new Error('[ERROR] 숫자를 입력해주세요.');
        if (bonusNumber < 1 || bonusNumber > 45) throw new Error('[ERROR] 보너스 번호는 1과 45 사이여야 합니다.');
        if (winningNumbers.includes(bonusNumber)) throw new Error('[ERROR] 이미 당첨 번호에 있는 숫자예요! 중복되지 않는 다른 숫자를 입력해주세요.');

        return bonusNumber;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }
}

export default BonusNumber;