import {LOTTO} from "../constants/constants.js";
import {Random} from '@woowacourse/mission-utils';
import Lotto from "../Lotto.js";

export const lottoUtils = {
    generateNLottos(n) {
        let lottos = []
        Array(n).fill().map(() => {
            const lotto = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE)
            lottos.push(new Lotto(lotto.sort((a, b) => a - b)))
        })
        return lottos;
    }
}