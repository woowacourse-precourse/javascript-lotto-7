import { Console } from "@woowacourse/mission-utils";

export function printWinningStatistics(
  correctLottoArray,
  CORRECT_NUMBER,
  CORRECT_MESSAGE,
  MONEY
) {
  let revenue = 0;
  Console.print("\n당첨 통계\n---");

  for (let i = 0; i < CORRECT_NUMBER.length; i++) {
    let count = 0;
    if (correctLottoArray.includes(CORRECT_NUMBER[i]) != 0) {
      count = correctLottoArray.filter(
        (num) => num == CORRECT_NUMBER[i]
      ).length;
      revenue += MONEY[i] * count;
    }
    Console.print(`${CORRECT_MESSAGE[i]} ${count}개`);
  }
  return revenue;
}
