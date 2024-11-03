import { Console } from "@woowacourse/mission-utils";
import Script from "./Script.js";
import LotteryGenerator from "./LotteryGenerator.js";
import LottoMatcher from "./LottoMatcher.js";
import ProfitCalculator from "./ProfitCalculator.js";
class App {
    #lottoList;
    #lottoMatcher;

    constructor() {
        this.#lottoMatcher = new LottoMatcher();
    }

    async run() {
        this.#lottoList = await this.buyLotto();

        await this.makeWinNumber();
        await this.makeBonusNumber();

        const sumOfwinNumberList = this.#lottoMatcher.winNumberList.reduce(
            (acc, cur) => acc + cur,
            0
        );

        if (
            this.#lottoList.lottoList.length &&
            sumOfwinNumberList === 6 &&
            this.#lottoMatcher.bonusNubmer
        )
            this.makeProfitResult();
    }

    async buyLotto() {
        try {
            const buyingCostInput = await Console.readLineAsync(
                Script.PLEASE_INPUT_BUYINGCOST
            );
            const lottoList = new LotteryGenerator(buyingCostInput);
            Console.print(Script.showLottoInfo(lottoList));

            return lottoList;
        } catch (error) {
            Console.print(error.message);
            return await this.buyLotto();
        }
    }

    async makeWinNumber() {
        try {
            const winNumbersInput = await Console.readLineAsync(
                Script.PLEASE_INPUT_WIN_NUMBERS
            );

            this.#lottoMatcher.winNumberList = winNumbersInput;
        } catch (error) {
            Console.print(error.message);
            await this.makeWinNumber();
        }
    }

    async makeBonusNumber() {
        try {
            const bonusNumberInput = await Console.readLineAsync(
                Script.PLEASE_INPUT_BONUS_NUMBER
            );
            this.#lottoMatcher.bonusNumber = bonusNumberInput;
        } catch (error) {
            Console.print(error.message);
            await this.makeBonusNumber();
        }
    }

    makeProfitResult() {
        this.#lottoMatcher.makeResult(this.#lottoList);

        const profitCalculator = new ProfitCalculator(
            this.#lottoMatcher,
            this.#lottoList
        );

        Console.print(Script.showTotalProfit(profitCalculator));
    }
}

export default App;
