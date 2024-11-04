import { Console, Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants.js";

export const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
};

export const print = (message) => {
  return Console.print(message);
};

export const generateLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO.MIN_NUMBER,
    LOTTO.MAX_NUMBER,
    LOTTO.LENGTH
  ).sort((a, b) => a - b);
};
