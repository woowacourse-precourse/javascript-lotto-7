import { MissionUtils } from '@woowacourse/mission-utils';

export default class RandomNum {
    static getNumber() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}