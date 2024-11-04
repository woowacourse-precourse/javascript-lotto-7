import { Console } from "@woowacourse/mission-utils";
import { BONUS_ARRAY, PRINT_PERCENT, ZERO_AMOUNT_TO_COMPARE } from "../constants.js";

const printError = (msg) => {
  Console.print("[ERROR]" + msg);
  throw new Error("[ERROR]");
};

const printParam = (msg) => {
  Console.print(msg);
};

const printResult = ({ matches, price, amount }, bonus = "") => {
  const [BONUS_MATCHES, BONUS_NUM] = BONUS_ARRAY;

  let displayMatches = matches;

  if (matches === BONUS_NUM) displayMatches = BONUS_MATCHES;

  const totalPrice = `${price.toLocaleString()},${ZERO_AMOUNT_TO_COMPARE}`;

  Console.print(`${displayMatches}개 일치${bonus} (${totalPrice}원) - ${amount}개`);
};


export {
  printError,
  printParam,
  printResult,
};
