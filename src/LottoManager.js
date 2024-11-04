import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class LottoManager {
    static issueLottos(amount) {
        const lottoCount = amount / 1000;
        Console.print(`${lottoCount}개를 구매했습니다.`);
        const lottos = [];
        for (let i = 0; i < lottoCount; i++) {
            const lotto = Lotto.generate();
            lottos.push(lotto);
            Console.print(`[${lotto.getNumbers().join(", ")}]`);
        }
        return lottos;
    }
}

export default LottoManager;