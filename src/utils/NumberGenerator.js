import {LOTTO_NUMBER_COUNT, MAX_NUMBER, MIN_NUMBER} from "../constants/gameConstants.js";
import {MissionUtils} from "@woowacourse/mission-utils";

class NumberGenerator {
    static generateLottoNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(
            MIN_NUMBER,
            MAX_NUMBER,
            LOTTO_NUMBER_COUNT
        );
    }
}

export default NumberGenerator;