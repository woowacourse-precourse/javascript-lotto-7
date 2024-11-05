import Lotto from "../Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputHandler from "../handler/OutputHandler.js";

class LottoController {
    constructor() {
        this.outputHandler = new OutputHandler();
    }

    generateLottos(lottoMoney) {
        const count = lottoMoney / 1000;
        const lottos = [];
        for (let i = 0; i < count; i++) {
            const numbers = this.getRandomSixNumbers();
            const lotto = new Lotto(numbers);
            lottos.push(lotto);
        }
        this.printLottos(lottos);
        return lottos;
    }

    getRandomSixNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }

    printLottos(lottos) {
        this.outputHandler.printLottos(lottos);
    }
}

export default LottoController;
