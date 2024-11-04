import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Lottos {
    #lottos;

    constructor(countGame) {
        this.#lottos = [];
        this.#generateLottos(countGame);
    }

    #generateLottos(countGame) {
        for (let index = 0; index < countGame; index++) {
            this.#lottos.push(this.#generateLotto())
        }
    }

    #generateLotto() {
        const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
        return new Lotto(randomNumbers);
    }

    getLottos() {
        return this.#lottos;
    }
}

export default Lottos;