import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

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
