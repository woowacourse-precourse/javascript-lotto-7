import { Console } from "@woowacourse/mission-utils";
import Validator from "../Validator.js"

const OutputView = {
    writeLottos(lottos) {
        for (let index = 0; index < lottos.length; index++) {
            const printLottoNumbers = lottos[index].getNumbers().join(", ");
            Console.print(`[${printLottoNumbers}]`);
        }
    }
}

export default OutputView;