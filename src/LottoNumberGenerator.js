import { Random } from "@woowacourse/mission-utils";

export default class LottoNumberGenerator {
    static generate() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}
