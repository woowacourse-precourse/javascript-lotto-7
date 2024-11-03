import { PRIZE_INFO } from "./constant.js";

class ProfitCalculator {
    #lottoRankResult;
    #buyingAmount;

    constructor({ lottoRankResult }, { buyingAmount }) {
        this.#lottoRankResult = lottoRankResult;
        this.#buyingAmount = buyingAmount;
    }

    calculateProfit() {
        const totalPrize = this.calculatePrize();
        const totalProfit = (totalPrize / (this.#buyingAmount * 1000)) * 100;
        return totalProfit.toFixed(1);
    }

    calculatePrize() {
        const sumResult = Object.entries(this.#lottoRankResult).reduce(
            (acc, [rank, amount]) => acc + PRIZE_INFO[rank] * amount,
            0
        );

        return sumResult;
    }

    get lottoRankResult() {
        return this.#lottoRankResult;
    }
}

export default ProfitCalculator;
