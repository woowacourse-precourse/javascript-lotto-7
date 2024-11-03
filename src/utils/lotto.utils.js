import {INSTRUCTION, LOTTO} from "../constants/constants.js";
import {Random, Console} from '@woowacourse/mission-utils';
import Lotto from "../Lotto.js";

export const lottoUtils = {
    generateNLottos(n) {
        let lottos = []
        Array(n).fill().map(() => {
            const lotto = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE)
            lottos.push(new Lotto(lotto.sort((a, b) => a - b)))
        })
        return lottos;
    },
    getLottoMatchResultArray(lottos, winningNumbers, bonusNumber) {
        let lottoResult = Array(8).fill(0);
        lottos.forEach((lotto) => {
            const matchNumber = lotto.getLottoResult(winningNumbers, bonusNumber);
            lottoResult[matchNumber]++
        })
        return lottoResult;
    }

}