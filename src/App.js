import {amountToNumber, stringToNumberArray} from "./services/utils/preprocessing.js";
import {INPUT} from "./constants/message.js";
import {input, purchaseOutput, winningStatsOutput} from "./ui/view.js";
import LottoMachine from "./services/LottoMachine.js";
import Lotto from "./services/Lotto.js";

class App {

    async run() {
        const purchaseAmount = await input(INPUT.PURCHASE)
        const purchaseNum = amountToNumber(purchaseAmount) //입력금액 갯수로 변환 한걸 담은 변수
        const lottoMachine = new LottoMachine(purchaseNum)
        const purchasedLottos = lottoMachine.lottoRelease()
        purchaseOutput(purchasedLottos)
        const winningNum = stringToNumberArray(await input(INPUT.WINNING_STATS))
        const lotto = new Lotto(winningNum)
        const bonusNum = await input(INPUT.BONUS_NUM) //보너스 번호는 유효성 검사만 필요하다
        lotto.recordStats(purchasedLottos, bonusNum)
        const calculateYield = lotto.calculateYield(purchaseAmount)
        winningStatsOutput(calculateYield)
    }
}

export default App;
