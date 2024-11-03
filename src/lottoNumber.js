// 로또 번호와 관련있는 함수들

import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

function makeLotto(count) {
  const lottoClassList = [];
  for (let i = 0; i < count; i++) {
    let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoClassList.push(new Lotto(lottoNumbers));
  }

  return lottoClassList;
}

export { makeLotto };
