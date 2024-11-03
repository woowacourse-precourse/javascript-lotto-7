import {amountToNumber, stringToNumberArray} from "./services/preprocessing.js";
import {INPUT} from "./constants/message.js";
import {input, purchaseOutput, winningStatsOutput} from "./ui/view.js";
import LottoMachine from "./services/LottoMachine.js";
import Lotto from "./services/Lotto.js";

class App {

    async run() {
        const purchaseNum = amountToNumber(await input(INPUT[0])) //입력금액 갯수로 변환 한걸 담은 변수

        const lottoMachine = new LottoMachine(purchaseNum)
        const purchasedLottos = lottoMachine.lottoRelease()
        console.log(purchasedLottos)

        purchaseOutput(purchasedLottos)

        const winningNum = stringToNumberArray(await input(INPUT[1]))

        const lotto = new Lotto(winningNum)
        const bonusNum = await input(INPUT[2]) //보너스 번호는 유효성 검사만 필요하다

        const resultObj = lotto.setStats(purchasedLottos, bonusNum)
        winningStatsOutput(resultObj)
    }
}

export default App;
