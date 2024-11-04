import { Console } from "@woowacourse/mission-utils";
import Validation from "../models/Validation.js";
import Lotto from "../models/Lotto.js";

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
  try {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const parseWinningNumber = input.split(",").map((number) => number.trim());
    return new Lotto(parseWinningNumber);
  } catch (error) {
    Console.print(error.message);
    return readWinningNumber();
  }
}

export async function readBonusNumber(parseWinningNumber) {
  try {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    Validation.isBonusNumberValidated(input, parseWinningNumber);
    return input;
  } catch (error) {
    Console.print(error.message);
    return readBonusNumber(parseWinningNumber);
  }
}
