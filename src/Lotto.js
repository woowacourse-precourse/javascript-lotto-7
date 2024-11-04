class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
        if (new Set(numbers).size !== numbers.length) {
            throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
        }
    }

    compareWinning(winningNumber, bonusNumber) {
        const MATCH_COUNT = this.#numbers.filter((num) =>
            winningNumber.includes(num)
        ).length;
        const BONUS_MATCH = this.#numbers.includes(Number(bonusNumber));
        return { MATCH_COUNT, BONUS_MATCH };
    }
}

export default Lotto;
