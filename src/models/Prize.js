import PurchaseAmount from "./PurchaseAmount.js";
import { PRIZE_MESSAGES } from "../constants/prizeMessages.js";

class Prize {

    static LOTTO_STATISTICS = Prize.initializeLottoStatistics();

    static PRIZE_RATIO_MULTIPLIER = 100;

    #lottos;

    #winningNumbers;

    #bonusNumber;

    constructor(lottos, winningNumbers, bonusNumber) {
        this.#lottos = lottos;
        this.#winningNumbers = winningNumbers;
        this.#bonusNumber = bonusNumber;
    }

    static initializeLottoStatistics() {
        return {
            firstRank: { count: 0, price: 2000000000, condition: 6 },
            secondRank: { count: 0, price: 30000000, condition: '5+1' },
            thirdRank: { count: 0, price: 1500000, condition: 5 },
            fourthRank: { count: 0, price: 50000, condition: 4 },
            fifthRank: { count: 0, price: 5000, condition: 3 },
        };
    }

    getPrize() {
        return this.#lottos.reduce((statistics, lotto) => {
            const { matchCount, hasBonus } = this.calculateMatchCounts(lotto);
            this.incrementPrizeCount({ matchCount, hasBonus }, statistics);
            return statistics;
        }, Prize.LOTTO_STATISTICS);
    }

    getRateReturn(prizeStatistics) {
        const totalPrize = Object.values(prizeStatistics).reduce((sum, prize) => {
            return sum + (prize.price * prize.count);
        }, 0);
        const totalSpent = this.#lottos.length * PurchaseAmount.AMOUNT_UNIT;
        return ((totalPrize / totalSpent) * Prize.PRIZE_RATIO_MULTIPLIER).toFixed(1);
    }

    getPrizeConditionText(condition) {
        if (typeof condition === 'string') {
            return PRIZE_MESSAGES.output_prize_bonus_text;
        }
        return PRIZE_MESSAGES.output_prize_condition_text(condition);
    }

    calculateMatchCounts(lotto) {
        return lotto.reduce((acc, number) => {
            if (this.#winningNumbers.includes(number)) {
                acc.matchCount++;
            }
            if (this.#bonusNumber === number) {
                acc.hasBonus = true;
            }
            return acc;
        }, { matchCount: 0, hasBonus: false });
    }

    incrementPrizeCount({ matchCount, hasBonus }, statistics) {
        for (const rank in statistics) {
            if (this.isMatchingRank(statistics[rank].condition, matchCount, hasBonus)) {
                statistics[rank].count++;
                break;
            }
        }
    }

    isMatchingRank(condition, matchCount, hasBonus) {
        if(hasBonus) {
            return condition === `${matchCount}+${1}`
        }
        return condition === matchCount;
    }
}

export default Prize;
