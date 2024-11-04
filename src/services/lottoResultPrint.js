import { Console } from "@woowacourse/mission-utils";
import {
  RESULT_MESSAGE,
  RESULT_MESSAGE_FORMAT,
} from "../constants/resultConstants.js";

export const lottoResultPrint = function (winningDetails) {
  for (let index in RESULT_MESSAGE) {
    Console.print(
      RESULT_MESSAGE_FORMAT(RESULT_MESSAGE[index], winningDetails[index])
    );
  }
};
