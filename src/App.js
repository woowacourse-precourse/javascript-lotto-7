import {getBonusNumber, getPurchaseAmount, getWinningNumbers} from "./services/utils/inputHandler.js";
import {purchaseOutput, winningStatsOutput} from "./ui/output.js";

class App {
    async run() {
        const {purchaseAmount, lottoMachine} = await getPurchaseAmount();
        const purchasedLottos = lottoMachine.lottoRelease();
        purchaseOutput(purchasedLottos);

        const lotto = await getWinningNumbers();

        const bonusNum = await getBonusNumber(lotto);
        lotto.recordStats(purchasedLottos, bonusNum);

        const calculateYield = lotto.calculateYield(purchaseAmount);
        winningStatsOutput(calculateYield);
    }
}

export default App;
