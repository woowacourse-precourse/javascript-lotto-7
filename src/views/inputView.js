import { Console } from "@woowacourse/mission-utils";
import Validation from "../models/Validation.js";

export async function readPurchaseAmount() {
  try {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    Validation.ispurchaseMoneyValidated(input);
    const count = Number(input) / 1000;
    return count;
  } catch (error) {
    Console.print(error.message);
    return readPurchaseAmount();
  }
}

export async function readWinningNumber() {
  const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
  const parseWinningNumber = input.split(",").map((number) => number.trim());
  return parseWinningNumber;
}

export async function readBonusNumber() {
  try {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    Validation.isBonusNumberValidated(input);
    return input;
  } catch (error) {
    Console.print(error.message);
    return readBonusNumber();
  }
}
