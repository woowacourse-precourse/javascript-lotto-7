// 로또 번호와 관련있는 함수들

import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { calcEarn } from "./util.js";

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
  let correctCntBonusList = [];
  lottoList.forEach((lotto) => {
    const correctCnt = lotto.checkNumbers(winningNumbers);
    const isBonus = lotto.isBonus(BONUS_NUMBER);
    correctCntBonusList.push([correctCnt, isBonus]);
  });
  return correctCntBonusList;
}

function organizeLotto(correctCntBonusList) {
  let result = {3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0}; // 7 >> 5개 일치, 보너스 볼 일치
  correctCntBonusList.forEach((item) => {
    const correctCnt = item[0];
    const isBonus = item[1];
    result[getResultNumber(isBonus, correctCnt)]++;
  });
  return result;
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

function printResult(lottoCnt, result){
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[7]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);
    Console.print(`총 수익률은 ${calcEarn(result, lottoCnt)}%입니다.`)

}

export { makeLotto, checkLotto, organizeLotto, printResult };
