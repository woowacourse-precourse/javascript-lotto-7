import { Console } from "@woowacourse/mission-utils";

export function printLottoNumbers(lottoArray) {
  lottoArray.map((value) => {
    Console.print(value.getNumbers());
  });
}