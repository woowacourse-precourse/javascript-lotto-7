import { LOTTO_CONFIG, ERROR } from '../constants/index.js';

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers.sort((a, b) => a - b);
    }

    #validate(numbers) {
        if (numbers.length !== LOTTO_CONFIG.LENGTH) {
            this.#handleError(ERROR.LOTTO.INVALID_LENGTH);
        }
        if (!Array.isArray(numbers)) {
            this.#handleError(ERROR.LOTTO.NOT_A_ARRAY);
        }
        if (new Set(numbers).size !== LOTTO_CONFIG.LENGTH) {
            this.#handleError(ERROR.LOTTO.DUPLICATE_NUMBER);
        }
        if (!this.#isValidRange(numbers)) {
            this.#handleError(ERROR.LOTTO.INVALID_RANGE);
        }
    }
    #handleError(message) {
        throw new Error(message);
    }

    #isValidRange(numbers) {
        return numbers.every((number) => number >= 1 && number <= 45);
    }

    getNumbers() {
        return [...this.#numbers];
    }

    match(winningNumbers, bonusNumber) {
        const matchCount = winningNumbers.filter((number) =>
            this.#numbers.includes(number)
        ).length;

        if (matchCount === 5 && this.#numbers.includes(bonusNumber)) {
            return 5.5;
        }
        return matchCount;
    }

    toString() {
        return `[${this.#numbers.join(', ')}]`;
    }

    static createLottos(money) {
        const count = Math.floor(money / LOTTO_CONFIG.PRICE_UNIT);
        return Array.from({ length: count }, () => {
            const numbers = this.#generateRandomNumbers();
            return new Lotto(numbers);
        });
    }

    static #generateRandomNumbers() {
        const numbers = Array.from({ length: 45 }, (_, i) => i + 1);
        const selectedNumbers = [];

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(
                Math.random() * (numbers.length - i)
            );
            selectedNumbers.push(numbers[randomIndex]);
            numbers[randomIndex] = numbers[numbers.length - 1 - i];
        }

        return selectedNumbers;
    }

    static calculateResults(lottos, winningNumbers, bonusNumber) {
        const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

        lottos.forEach((lotto) => {
            const matchResult = lotto.match(winningNumbers, bonusNumber);
            if (results[matchResult] !== undefined) {
                results[matchResult]++;
            }
        });

        return results;
    }

    static calculateProfitRate(results, money) {
        const prizeMoney = {
            3: 5000,
            4: 50000,
            5: 1500000,
            5.5: 30000000,
            6: 2000000000,
        };

        const totalPrize = Object.entries(results).reduce(
            (sum, [match, count]) => {
                return sum + prizeMoney[match] * count;
            },
            0
        );

        return Math.round((totalPrize / money) * LOTTO_CONFIG.PRICE_UNIT) / 10;
    }
}

export default Lotto;
