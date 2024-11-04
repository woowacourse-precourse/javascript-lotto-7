import Lotto from "../Lotto.js";
import { inputCash, inputWinningNumbers, inputBonusNumbers } from "../utils/inputView.js";
import Consumer from "./Consumer.js";
import { printAllLotto, printGuideBuyLotto, printWinningBoard, printRateOfReturn } from "../utils/outputView.js";
import Comparison from "../service/Comparision.js";
import { Calculator } from "../service/Calculator.js";

export class LottoGame {
    #lottos = [];
    #comparison;
    #calculator;

    constructor() {
        this.#calculator = new Calculator();
    }

    async playGame() {
        const cash = await inputCash();
        const consumer = new Consumer(cash);
        const lottoCount = consumer.buyLottoCount();

        this.#generateLotto(lottoCount);
        this.#displayLotto(lottoCount);
    }

    async resultGame(){
        await this.#processWinning();
        this.#displayResult();
    }

    #generateLotto(count) {
        this.#lottos = Array.from({ length: count }, () => Lotto.create());
    }

    #displayLotto(count) {
        printGuideBuyLotto(count);
        printAllLotto(this.#lottos);
    }

    async #processWinning() {
        const winNumber = await inputWinningNumbers();
        const bonusNumber = await inputBonusNumbers();

        this.#comparison = new Comparison(winNumber, bonusNumber);
    }

    #displayResult() {
        const results = this.#calculator.calculateLottoResults(this.#lottos, this.#comparison);
        const statistics = this.#calculator.calculateWinningStatatics(results, this.#lottos.length);

        this.#displayStatistics(statistics);
        this.#displayProfitRate(statistics.profitRate);
    }

    #displayStatistics(statistics) {
        printWinningBoard(statistics.rank);
    }

    #displayProfitRate(profitRate) {
        printRateOfReturn(profitRate);
    }
}