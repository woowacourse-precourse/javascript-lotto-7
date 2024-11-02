import Lotto from "../Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
    generateLottos(lottoMoney) {
        const count = lottoMoney / 1000;
        const lottos = [];
        for (let i = 0; i < count; i++) {
            const numbers = this.getRandomSixNumbers();
            const lotto = new Lotto(numbers);
            lottos.push(lotto);
        }
        return lottos;
    }

    getRandomSixNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }
}

export default LottoController;
