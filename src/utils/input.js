import { Console } from "@woowacourse/mission-utils";
import Lotto from "../components/Lotto.js";
import { checkBonusNumberValid, checkCoastValid } from "./validation.js";
import { LOTTO_COAST_UNIT } from "../constant.js";

export function input(message) {
  return Console.readLineAsync(message);
}

export async function getCoastInput() {
  const coast = await input("구입 금액을 입력해 주세요.\n");
  checkCoastValid(coast);

  const quantity = coast / LOTTO_COAST_UNIT;
  Console.print(`${quantity}개를 구매했습니다.`);

  return quantity;
}

export async function getWinningNumberInput() {
  const inputNumber = await input("\n당첨 번호를 입력해주세요.\n");
  const inputNumbers = inputNumber.split(",").map((num) => Number(num));

  const winningNumbers = new Lotto(inputNumbers);

  const bonusNumber = Number(await input("\n보너스 번호를 입력해주세요.\n"));
  checkBonusNumberValid(bonusNumber, winningNumbers.numbers);

  return {
    winningNumbers: winningNumbers.numbers,
    bonusNumber: bonusNumber,
  };
}
