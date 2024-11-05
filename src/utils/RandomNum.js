import { MissionUtils } from '@woowacourse/mission-utils';
import { number } from '../constants.js';
export default class RandomNum {
    static getNumber() {
        return MissionUtils.Random.pickUniqueNumbersInRange(number.FIRST_LOTTO_NUM, number.LAST_LOTTO_NUM, number.LAST_LOTTO_NUM);
    }
}