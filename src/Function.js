import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  ANSWER_START,
  ANSWER_STRING,
  BUY_ERROR,
  COMMA,
  EARN_END,
  EARN_START,
  EMPTY,
  END_NUMBER,
  END_SQUARE_BRACKET,
  ENTER,
  EQUAL_END,
  EQUAL_FIVE,
  EQUAL_FIVE_BONUS,
  EQUAL_FIVE_BONUS_STRING,
  EQUAL_FIVE_STRING,
  EQUAL_FOUR,
  EQUAL_FOUR_STRING,
  EQUAL_SIX,
  EQUAL_SIX_STRING,
  EQUAL_THREE,
  EQUAL_THREE_STRING,
  MONEY_UNIT,
  NUMBER_COUNT,
  PRIZE_FIVE,
  PRIZE_FIVE_BONUS,
  PRIZE_FOUR,
  PRIZE_SIX,
  PRIZE_THREE,
  SPACE,
  START_NUMBER,
  START_SQUARE_BRACKET,
  ZERO,
} from "./Constant.js";

export const makeLottos = (count) => {
  const lottoList = [];
  for (let i = 0; i < count; i++) {
    lottoList.push(new Lotto(makeLotto()));
  }
  return lottoList;
};

const makeLotto = () => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(START_NUMBER, END_NUMBER, NUMBER_COUNT);
  numbers.sort((a, b) => a - b);

  printLotto(numbers);
  return numbers;
};

const printLotto = (numbers) => {
  let printLotto = EMPTY;
  for (let i = 0; i < numbers.length - 1; i++) {
    printLotto += numbers[i] + COMMA + SPACE;
  }
  printLotto += numbers[numbers.length - 1];
  MissionUtils.Console.print(START_SQUARE_BRACKET + printLotto + END_SQUARE_BRACKET);
};

export const makeWinningLotto = (winningLottoString) => {
  const winningLotto = new Lotto(winningLottoString.split(COMMA));
  return winningLotto;
};

export const calculateLottos = (lottos, winningLotto, bonusNumber) => {
  const equalCounts = new Array(EQUAL_FIVE_BONUS + 1).fill(ZERO);
  for (let i = 0; i < lottos.length; i++) {
    const equalCount = calculateLotto(lottos[i], winningLotto, bonusNumber);
    equalCounts[equalCount] += 1;
  }
  return equalCounts;
};

const calculateLotto = (lotto, winningLotto, bonusNumber) => {
  const equalCount = winningLotto.equalWinning(lotto);
  const bonus = false;
  if (equalCount == EQUAL_FIVE) {
    bonus = lotto.checkCheck(bonusNumber);
  }
  if (bonus == true) {
    equalCount = EQUAL_FIVE_BONUS;
  }
  return equalCount;
};
export const printResult = (equalCounts) => {
  MissionUtils.Console.print(ANSWER_STRING + ENTER);
  MissionUtils.Console.print(ANSWER_START + ENTER);
  MissionUtils.Console.print(EQUAL_THREE_STRING + equalCounts[EQUAL_THREE] + EQUAL_END + ENTER);
  MissionUtils.Console.print(EQUAL_FOUR_STRING + equalCounts[EQUAL_FOUR] + EQUAL_END + ENTER);
  MissionUtils.Console.print(EQUAL_FIVE_STRING + equalCounts[EQUAL_FIVE] + EQUAL_END + ENTER);
  MissionUtils.Console.print(EQUAL_FIVE_BONUS_STRING + equalCounts[EQUAL_FIVE_BONUS] + EQUAL_END + ENTER);
  MissionUtils.Console.print(EQUAL_SIX_STRING + equalCounts[EQUAL_SIX] + EQUAL_END + ENTER);
};

export const printEarn = (buyCount, equalCounts) => {
  const earn =
    equalCounts[EQUAL_THREE] * PRIZE_THREE +
    equalCounts[EQUAL_FOUR] * PRIZE_FOUR +
    equalCounts[EQUAL_FIVE] * PRIZE_FIVE +
    equalCounts[EQUAL_FIVE_BONUS] * PRIZE_FIVE_BONUS +
    equalCounts[EQUAL_SIX] * PRIZE_SIX;
  const earnRate = (earn / buyCount) * 100;
  MissionUtils.Console.print(EARN_START + Math.round(earnRate * 10) / 10 + EARN_END);
};

export const buyCountErrorCheck = (buyCount) => {
  if (isNaN(buyCount) || buyCount <= ZERO || buyCount % MONEY_UNIT != ZERO) {
    throw new Error(BUY_ERROR + ENTER);
  }
};
