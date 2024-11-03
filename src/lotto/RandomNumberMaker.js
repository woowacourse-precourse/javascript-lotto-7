import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER, LOTTO_NUMBERS_COUNT } from "../constant/constants.js";

export class RandomNumberMaker {
  makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS_COUNT);
  }
}
