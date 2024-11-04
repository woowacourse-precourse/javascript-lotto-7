import { BOARD } from "../constant/boardMessage.js";

export class Calculator {
    static #prizeMoney = {
        NONE : BOARD.NONE_WINNING_CASH,
        FIRST : BOARD.FIRST_WINNING_CASH,
        SECOND : BOARD.SECOND_WINNING_CASH,
        THIRD : BOARD.THIRD_WINNING_CASH,
        FOURTH : BOARD.FOURTH_WINNING_CASH,
        FIFTH : BOARD.FIFTH_WINNING_CASH
    }
    static #lottoPrize = 1000;

    static #initialLottos(){
        return Array(6).fill(0);
    }

    #calculateLottoResults(lottos, comparision){
        return lottos.map(lotto => comparision.compareWithLotto(lotto));
    }

    #countRankResult(results){
        return results.reduce((counts, result) => {
            counts[result.rank]++;
            return counts;
        }, this.constructor.#initialLottos());
    }

    #calculateWinningStatics(lottos, comparison){
        const lottoResult = this.#calculateLottoResults(lottos, comparison);
        const rankCounts = this.#countRankResult(lottoResult);

        return {
            first : {count : rankCounts[1], prize : Calculator.#prizeMoney.FIRST},
            second : {count : rankCounts[2], prize : Calculator.#prizeMoney.SECOND},
            third : {count : rankCounts[3], prize : Calculator.#prizeMoney.THIRD},
            fourth : {count : rankCounts[4], prize : Calculator.#prizeMoney.FOURTH},
            fifth : {count : rankCounts[5], prize : Calculator.#prizeMoney.FIFTH},
        };
    }

    #calculateTotalPrize(rank){
        if (!rank) return 0;

        const prizes = [
            Calculator.#prizeMoney.NONE,
            Calculator.#prizeMoney.FIRST,
            Calculator.#prizeMoney.SECOND,
            Calculator.#prizeMoney.THIRD,
            Calculator.#prizeMoney.FOURTH,
            Calculator.#prizeMoney.FIFTH
        ];

        return rank.reduce((sum, count, index) => {
            if (index === 0) return sum;
            return sum + (prizes[index] * count)
        }, 0);
    }

    #roundToDecimal(number, decimals) {
        const factor = Math.pow(10, decimals);
        return Math.round(number * factor) / factor;
    }

    #calculateProfitRate(rankCounts, lottos){

        const totalPrize = parseInt(this.#calculateTotalPrize(rankCounts));
        const totalCoast = parseInt(lottos.length) * Calculator.#lottoPrize;

        if (totalPrize === 0 || totalCoast === 0 || rankCounts === 0){
            console.log("0");
            return 0;
        }

        return this.#roundToDecimal((totalPrize / totalCoast * 100), 2);
    }

    calculateGameResults(lottos, comparison) {

        if (!lottos || lottos.length === 0) {
            return {
                statistics: {
                    first: { count: 0, prize: Calculator.#prizeMoney.FIRST },
                    second: { count: 0, prize: Calculator.#prizeMoney.SECOND },
                    third: { count: 0, prize: Calculator.#prizeMoney.THIRD },
                    fourth: { count: 0, prize: Calculator.#prizeMoney.FOURTH },
                    fifth: { count: 0, prize: Calculator.#prizeMoney.FIFTH }
                },
                profitRate: 0
            };
        }

        const results = this.#calculateLottoResults(lottos, comparison);
        const rankCounts = this.#countRankResult(results);
        const winningStatistics = this.#calculateWinningStatics(lottos, comparison);
        let profitRate = this.#calculateProfitRate(rankCounts, lottos);

        if (isNaN(profitRate) || profitRate === undefined) {
            profitRate = 0;
        }

        return {
            statistics: winningStatistics,
            profitRate: profitRate
        };
    }
}