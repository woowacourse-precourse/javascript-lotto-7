import { Random } from "@woowacourse/mission-utils";

export default class LottoNumberGenerator {
    generate() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}
