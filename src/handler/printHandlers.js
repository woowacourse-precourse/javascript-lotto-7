import { Console } from "@woowacourse/mission-utils";
import { BONUS, PROMPTS, ZERO_AMOUNT_TO_COMPARE } from "../constants.js";

const printError = (msg) => {
  Console.print("[ERROR]" + msg);
  throw new Error("[ERROR]");
};

const printParam = (msg) => {
  Console.print(msg);
};

const printResult = ({ matches, price, amount }, bonus = "") => {
  const [BONUS_MATCHES, BONUS_NUM] = BONUS.BONUS_ARRAY;

  let displayMatches = matches;

  if (matches === BONUS_NUM) displayMatches = BONUS_MATCHES;

  const totalPrice = `${price.toLocaleString()},${ZERO_AMOUNT_TO_COMPARE}`;

  Console.print(`${displayMatches}개 일치${bonus} (${totalPrice}원) - ${amount}개`);
};

const printPercent = (percent) => {
  const [start, end] = PROMPTS.PRINT_PERCENT;
  Console.print(start + percent + end);
}

export {
  printError,
  printParam,
  printResult,
  printPercent,
};
