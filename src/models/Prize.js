import PurchaseAmount from "./PurchaseAmount.js";
import { PRIZE_MESSAGES } from "../constants/prizeMessages.js";

class Prize {

    static LOTTO_STATISTICS = {
        firstRank: { count: 0, price: 2000000000, condition: 6 },
        secondRank: { count: 0, price: 30000000, condition: '5+1' },
        thirdRank: { count: 0, price: 1500000, condition: 5 },
        fourthRank: { count: 0, price: 50000, condition: 4 },
        fifthRank: { count: 0, price: 5000, condition: 3 },
    };

    #lottos;

    #winningNumbers;

    #bonusNumber;

    constructor(lottos, winningNumbers, bonusNumber) {
        this.#lottos = lottos;
        this.#winningNumbers = winningNumbers;
        this.#bonusNumber = bonusNumber;
    }

    getPrize() {
        return this.#lottos.reduce((statistics, lotto) => {
            const { count, bonusCount } = this.getPrizeRankCounts(lotto);
            this.incrementRankCount({ count, bonusCount }, statistics);
            return statistics;
        }, Prize.LOTTO_STATISTICS);
    }

    getRateReturn(prize) {
        const totalPrice = Object.values(prize).reduce((accumulator, currentPrize) => {
            return accumulator + Number(currentPrize.price) * Number(currentPrize.count)
        }, 0);
        const totalExpenditure = this.#lottos.length * PurchaseAmount.AMOUNT_UNIT;
        return ((totalPrice / totalExpenditure) * 100).toFixed(1);
    }

    getConditionText(condition) {
        if (typeof condition === 'string') {
            return PRIZE_MESSAGES.output_prize_bonus_text;
        }
        return PRIZE_MESSAGES.output_prize_condition_text(condition);
    }

    getPrizeRankCounts(lotto) {
        return lotto.reduce((acc, number) => {
            if (this.#winningNumbers.includes(number)) {
                acc.count++;
            }
            if (this.#bonusNumber === number) {
                acc.bonusCount++;
            }
            return acc;
        }, { count: 0, bonusCount: 0 });
    }

    incrementRankCount({ count, bonusCount }, statistics) {
        for (const rank in statistics) {
            if (this.isRankConditionMet(statistics[rank].condition, count, bonusCount)) {
                statistics[rank].count++;
                break;
            }
        }
    }

    isRankConditionMet(condition, count, bonusCount) {
        return condition === `${count}+${bonusCount}` || condition === count;
    }
}

export default Prize;