class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (new Set(numbers).size !== numbers.length) {
            throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
        }
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
        if (!numbers.every((x) => x >= 1 && x <= 45)) {
            throw new Error('[ERROR] 로또 번호는 1~45 숫자여야 합니다.');
        }
    }

    compareWinning(winningNumber, bonusNumber) {
        const MATCH_COUNT = this.#numbers.filter((num) =>
            winningNumber.includes(num)
        ).length;
        const BONUS_MATCH = this.#numbers.includes(bonusNumber);
        return { MATCH_COUNT, BONUS_MATCH };
    }
}

export default Lotto;
