import { MissionUtils } from "@woowacourse/mission-utils";
import {
  WINNING_NUMBER_COUNT,
  WINNING_NUMBER_MAX,
  WINNING_NUMBER_MIN,
} from "../constants/lottoConstants.js";

export const generateLottoNumbersByCount = function (lottoCount) {
  let lottoNumbers = [];

  for (let index = 0; index < lottoCount; index += 1) {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      WINNING_NUMBER_MIN,
      WINNING_NUMBER_MAX,
      WINNING_NUMBER_COUNT
    );

    lottoNumbers.push(lottoNumber);
  }

  return lottoNumbers;
};
