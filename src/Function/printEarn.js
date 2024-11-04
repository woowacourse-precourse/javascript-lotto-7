import { MissionUtils } from "@woowacourse/mission-utils";
import {
  EARN_END,
  EARN_START,
  EQUAL_FIVE,
  EQUAL_FIVE_BONUS,
  EQUAL_FOUR,
  EQUAL_SIX,
  EQUAL_THREE,
  PRIZE_FIVE,
  PRIZE_FIVE_BONUS,
  PRIZE_FOUR,
  PRIZE_SIX,
  PRIZE_THREE,
} from "../Constant.js";

export const printEarn = (buyCount, equalCounts) => {
  const earn =
    equalCounts[EQUAL_THREE] * PRIZE_THREE +
    equalCounts[EQUAL_FOUR] * PRIZE_FOUR +
    equalCounts[EQUAL_FIVE] * PRIZE_FIVE +
    equalCounts[EQUAL_FIVE_BONUS] * PRIZE_FIVE_BONUS +
    equalCounts[EQUAL_SIX] * PRIZE_SIX;

  const earnRate = Math.round((earn / buyCount) * 1000) / 10;

  MissionUtils.Console.print(EARN_START + earnRate + EARN_END);
};
