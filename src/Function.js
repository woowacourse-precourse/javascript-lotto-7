import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { BUY_ERROR, ENTER } from "./Constant.js";

export const makeLottos = (count) => {
  const lottoList = [];
  for (let i = 0; i < count; i++) {
    lottoList.push(new Lotto(makeLotto()));
  }
  return lottoList;
};

const makeLotto = () => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  numbers.sort((a, b) => a - b);
  MissionUtils.Console.print(numbers);
  return numbers;
};

export const makeWinningLotto = (winningLottoString) => {
  const winningLotto = new Lotto(winningLottoString.split(","));
  return winningLotto;
};

export const calculateLottos = (lottos, winningLotto, bonusNumber) => {
  const equalCounts = new Array(8).fill(0);
  for (let i = 0; i < lottos.length; i++) {
    const equalCount = calculateLotto(lottos[i], winningLotto, bonusNumber);
    equalCounts[equalCount] += 1;
  }
  return equalCounts;
};

const calculateLotto = (lotto, winningLotto, bonusNumber) => {
  const equalCount = winningLotto.equalWinning(lotto);
  const bonus = false;
  if (equalCount == 5) {
    bonus = lotto.checkCheck(bonusNumber);
  }
  if (bonus == true) {
    equalCount = 7;
  }
  return equalCount;
};
export const printResult = (equalCounts) => {
  MissionUtils.Console.print("당첨 통계\n");
  MissionUtils.Console.print("---\n");
  MissionUtils.Console.print("3개 일치 (5,000원) - " + equalCounts[3] + "개\n");
  MissionUtils.Console.print(
    "4개 일치 (50,000원) - " + equalCounts[4] + "개\n"
  );
  MissionUtils.Console.print(
    "5개 일치 (1,500,000원) - " + equalCounts[5] + "개\n"
  );
  MissionUtils.Console.print(
    "5개 일치, 보너스 볼 일치 (30,000,000원) - " + equalCounts[7] + "개\n"
  );
  MissionUtils.Console.print(
    "6개 일치 (2,000,000,000원) - " + equalCounts[6] + "개\n"
  );
};

export const printEarn = (buyCount, equalCounts) => {
  const earn =
    equalCounts[3] * 5000 +
    equalCounts[4] * 50000 +
    equalCounts[5] * 1500000 +
    equalCounts[7] * 30000000 +
    equalCounts[6] * 2000000000;
  const earnRate = (earn / buyCount) * 100;
  MissionUtils.Console.print(Math.round(earnRate * 10) / 10 + "%");
};

export const buyCountErrorCheck = (buyCount) => {
  if (isNaN(buyCount) || buyCount <= 0 || buyCount % 1000 != 0) {
    throw new Error(BUY_ERROR + ENTER);
  }
};
