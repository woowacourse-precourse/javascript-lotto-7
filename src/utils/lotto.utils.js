import {LOTTO} from "../constants/constants.js";
import {Random} from '@woowacourse/mission-utils';
import Lotto from "../Models/Lotto.js";

export const lottoUtils = {
    generateNLottos(n) {
        let lottos = []
        Array(n).fill().map(() => {
            const lotto = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE)
            lottos.push(new Lotto(lotto.sort((a, b) => a - b)))
        })
        return lottos;
    },
    getPrize(matchNumber) {
        switch (matchNumber) {
            case 7:
                return LOTTO.FIRST_PRIZE
            case 6:
                return LOTTO.SECOND_PRIZE
            case 5:
                return LOTTO.THIRD_PRIZE
            case 4:
                return LOTTO.FOURTH_PRIZE
            case 3:
                return LOTTO.FIFTH_PRIZE
            default:
                return 0
        }
    },
    makeMoneyFormat(money, separator = ",") {
        return money.toString().split("").reverse().join("")
            .replace(/(.{3})(?=.)/g, `$1${separator}`)
            .split("").reverse().join("");
    },


}