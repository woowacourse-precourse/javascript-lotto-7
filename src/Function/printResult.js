import { MissionUtils } from "@woowacourse/mission-utils";
import {
  ANSWER_START,
  ANSWER_STRING,
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
} from "../Constant.js";

export const printResult = (equalCounts) => {
  MissionUtils.Console.print(ENTER + ANSWER_STRING);
  MissionUtils.Console.print(ANSWER_START);
  MissionUtils.Console.print(EQUAL_THREE_STRING + equalCounts[EQUAL_THREE] + EQUAL_END);
  MissionUtils.Console.print(EQUAL_FOUR_STRING + equalCounts[EQUAL_FOUR] + EQUAL_END);
  MissionUtils.Console.print(EQUAL_FIVE_STRING + equalCounts[EQUAL_FIVE] + EQUAL_END);
  MissionUtils.Console.print(EQUAL_FIVE_BONUS_STRING + equalCounts[EQUAL_FIVE_BONUS] + EQUAL_END);
  MissionUtils.Console.print(EQUAL_SIX_STRING + equalCounts[EQUAL_SIX] + EQUAL_END);
};
