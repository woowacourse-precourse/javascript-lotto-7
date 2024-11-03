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

