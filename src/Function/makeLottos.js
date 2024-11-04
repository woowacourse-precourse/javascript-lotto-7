import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import {
  COMMA,
  EMPTY,
  END_NUMBER,
  END_SQUARE_BRACKET,
  NUMBER_COUNT,
  SPACE,
  START_NUMBER,
  START_SQUARE_BRACKET,
} from "../Constant.js";

const printLotto = (numbers) => {
  let printLotto = EMPTY;

  for (let i = 0; i < numbers.length - 1; i++) {
    printLotto += numbers[i] + COMMA + SPACE;
  }

  printLotto += numbers[numbers.length - 1];
  MissionUtils.Console.print(START_SQUARE_BRACKET + printLotto + END_SQUARE_BRACKET);
};

const makeLotto = () => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(START_NUMBER, END_NUMBER, NUMBER_COUNT);

  numbers.sort((a, b) => a - b);

  printLotto(numbers);

  return numbers;
};

export const makeLottos = (count) => {
  const lottoList = [];

  for (let i = 0; i < count; i++) {
    lottoList.push(new Lotto(makeLotto()));
  }

  return lottoList;
};
