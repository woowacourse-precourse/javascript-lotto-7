import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export function generateLottoNumbers(quantity) {
  const allLottos = [];
  for (let i = 0; i < quantity; i++) {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNumbers);
    allLottos.push(lotto);
  }
  return allLottos;
}
