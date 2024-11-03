import { Console } from "@woowacourse/mission-utils";
import Script from "./script.js";
import LotteryGenerator from "./LotteryGenerator.js";
import LottoMatcher from "./LottoMatcher.js";
import ProfitCalculator from "./ProfitCalculator.js";
class App {
    async run() {
        const lottoList = await this.buyLotto();
        const lottoMatcher = new LottoMatcher();
        await this.makeWinNumber(lottoMatcher);
        await this.makeBonusNumber(lottoMatcher);
        this.makeProfitResult(lottoList, lottoMatcher);
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

    async makeWinNumber(lottoMatcher) {
        try {
            const winNumbersInput = await Console.readLineAsync(
                Script.PLEASE_INPUT_WIN_NUMBERS
            );

            lottoMatcher.winNumberList = winNumbersInput;
        } catch (error) {
            Console.print(error.message);
            await this.makeWinNumber(lottoMatcher);
        }
    }

    async makeBonusNumber(lottoMatcher) {
        try {
            const bonusNumberInput = await Console.readLineAsync(
                Script.PLEASE_INPUT_BONUS_NUMBER
            );
            lottoMatcher.bounusNumber = bonusNumberInput;
        } catch (error) {
            Console.print(error.message);
            await this.makeBonusNumber(lottoMatcher);
        }
    }

    makeProfitResult(lottoList, lottoMatcher) {
        lottoMatcher.makeResult(lottoList);

        const profitCalculator = new ProfitCalculator(lottoMatcher, lottoList);
        Console.print(Script.showTotalProfit(profitCalculator));
    }
}

export default App;
