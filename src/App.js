import {purchaseOutput, winningStatsOutput} from "./ui/view.js";
import {getBonusNumber, getPurchaseAmount, getWinningNumbers} from "./services/utils/inputHandler.js";

class App {
    async run() {
        const {purchaseAmount, lottoMachine} = await getPurchaseAmount(); // 유효할 때까지 반복
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
