import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { GameOutput } from "./woowahanOutput.js";

export default class LottoStore {
    #countLotto;

    getLottoTicketCount(input) {
        const inputNumber = Number(input);
        this.#countLotto = Math.floor(inputNumber / 1000);
        return this.#countLotto;
    }

    generateLottos(){
        const lottos = [];

        for (let i = 0; i < this.#countLotto; i++) {
          const generateNumber = Random
            .pickUniqueNumbersInRange(1, 45, 6)
            .sort((a, b) => a - b);

          const lotto = new Lotto(generateNumber);
          lottos.push(lotto);
          GameOutput.printLottoOneLine(generateNumber);
        }

        return lottos;
    }

}