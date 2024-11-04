import { Console } from "@woowacourse/mission-utils";
import { validateBudget, validateWinningNumbers, validateBounsNumber } from "./Validator.js";

export async function getTicketCount() {
  const budget = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );

  validateBudget(budget);

  const ticketCount = budget / 1000
  return ticketCount;
}

export async function getWinningNumbers() {
  const winningNumbersInput = await Console.readLineAsync(
    "\n당첨 번호를 입력해 주세요.\n"
  );
  const winningNumbers = winningNumbersInput.split(",").map(Number);

  validateWinningNumbers(winningNumbers);

  return winningNumbers;
}

export async function getBonusNumber(winningNumbers) {
  const bonusNumber = await Console.readLineAsync(
    "\n보너스 번호를 입력해 주세요.\n"
  )

  validateBounsNumber(bonusNumber, winningNumbers);

  return bonusNumber;
}