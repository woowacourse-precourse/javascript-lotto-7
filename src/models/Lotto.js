import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG, ERROR } from '../constants/index.js';

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers.sort((a, b) => a - b);
    }

    #validate(numbers) {
        if (!Array.isArray(numbers)) {
            this.#handleError(ERROR.LOTTO.NOT_A_ARRAY);
        }
        if (numbers.length !== LOTTO_CONFIG.LENGTH) {
            this.#handleError(ERROR.LOTTO.INVALID_LENGTH);
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
        return numbers.every(
            (number) =>
                number >= LOTTO_CONFIG.MIN_NUM && number <= LOTTO_CONFIG.MAX_NUM
        );
    }

    getNumbers() {
        return [...this.#numbers];
    }

    match(winningNumbers, bonusNumber) {
        const matchCount = this.#getMatchCount(winningNumbers);
        return this.#determinePrizeRank(matchCount, bonusNumber);
    }

    #getMatchCount(winningNumbers) {
        return winningNumbers.filter((number) => this.#numbers.includes(number))
            .length;
    }

    #determinePrizeRank(matchCount, bonusNumber) {
        if (matchCount === 5 && this.#numbers.includes(bonusNumber)) {
            return LOTTO_CONFIG.MATCH_FIVE_BONUS;
        }
        return matchCount;
    }

    static createLottos(money) {
        const count = Math.floor(money / LOTTO_CONFIG.PRICE_UNIT);
        return Array.from({ length: count }, () => {
            const numbers = this.#generateRandomNumbers().map((n) => Number(n));
            return new Lotto(numbers);
        });
    }

    static #generateRandomNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(
            LOTTO_CONFIG.MIN_NUM,
            LOTTO_CONFIG.MAX_NUM,
            LOTTO_CONFIG.LENGTH
        );
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

    static calculateEarningRate(results, money) {
        const totalPrize = Object.entries(results).reduce(
            (sum, [match, count]) => {
                return sum + LOTTO_CONFIG.PRIZE_MONEY[match] * count;
            },
            0
        );

        const rate = (totalPrize / money) * 100;

        return Math.round(rate * 10) / 10;
    }
}

export default Lotto;
