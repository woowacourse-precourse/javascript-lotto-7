// 로또 번호와 관련있는 함수들

import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

function makeLotto(count) {
  const lottoClassList = [];
  Console.print(`${count}개를 구매했습니다.`);
  for (let i = 0; i < count; i++) {
    let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoClassList.push(new Lotto(lottoNumbers));
  }
  Console.print("");
  return lottoClassList;
}

function checkLotto(lottoList, BONUS_NUMBER, winningNumbers) {
  lottoList.forEach((lotto) => {
    lotto.checkNumbers(winningNumbers);
    lotto.isBonus(BONUS_NUMBER);
  });
}

function organizeLotto(lottoList) {
  lottoList.forEach((lotto) => {
    const correctCnt = lotto.getCorrectCnt();
    const isBonus = lotto.getIsBonus();
    Lotto.setResult(getResultNumber(isBonus, correctCnt));
  });
}

function getResultNumber(isBonus, correctCnt) {
  if (isBonus && correctCnt === 5) {
    return 7;
  } else if (correctCnt === 6) {
    return 6;
  } else if ((isBonus && correctCnt === 4) || (!isBonus && correctCnt === 5)) {
    return 5;
  } else if ((isBonus && correctCnt === 3) || (!isBonus && correctCnt === 4)) {
    return 4;
  } else if ((isBonus && correctCnt === 2) || (!isBonus && correctCnt === 3)) {
    return 3;
  }
}

export { makeLotto, checkLotto, organizeLotto };
