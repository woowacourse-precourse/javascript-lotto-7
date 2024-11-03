import { Console } from "@woowacourse/mission-utils";

export function printLottoNumbers(lottoArray) {
  lottoArray.map((value) => {
    const numbers = value.getNumbers();
    Console.print(`[${numbers.join(", ")}]`);
  });
}
