import { Console } from "@woowacourse/mission-utils";
const OutputView = {
    writeLottos(lottos) {
        for (let index = 0; index < lottos.length; index++) {
            Console.print(`[${this.writeLottoNumbers(lottos[index])}]`);
        }
    },

    writeLottoNumbers(lotto) {
        return lotto.getNumbers().join(", ");
    }
}

export default OutputView;