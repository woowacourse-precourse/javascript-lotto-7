import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_CONFIG } from "../../constant/LottoConfig.js";

const generateLotto = () => MissionUtils.Random.pickUniqueNumbersInRange(
  LOTTO_CONFIG.NUMBER.MIN,
  LOTTO_CONFIG.NUMBER.MAX,
  LOTTO_CONFIG.COUNT,
);

export default generateLotto;
