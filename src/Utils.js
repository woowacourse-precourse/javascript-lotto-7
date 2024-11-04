import { ERROR_MESSAGE_FORMAT_OUTPUT } from "./ErrorMessage.js";
import { Console } from "@woowacourse/mission-utils";

export function printLottoArray(lottoArray) {
  if (!Array.isArray(lottoArray))
    throw new Error(ERROR_MESSAGE_FORMAT_OUTPUT.nonArray);
  lottoArray.forEach((value) => {
    Console.print(JSON.stringify(value.getNumbers()).replace(/,/g, ", "));
  });
}

export function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
