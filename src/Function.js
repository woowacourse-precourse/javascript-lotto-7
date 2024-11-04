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

export const buyCountErrorCheck = (buyCount) => {
  if (isNaN(buyCount) || buyCount <= 0 || buyCount % 1000 != 0) {
    throw new Error(BUY_ERROR + ENTER);
  }
};
