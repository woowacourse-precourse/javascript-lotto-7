import { Console } from "@woowacourse/mission-utils";
import { validateBudget, validateBounsNumber, validateWinningNumbers } from "./Validator.js";

// 구입금액 입력받는 함수
export async function getTicketCount() {
  const budget = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );

  validateBudget(budget);

  const ticketCount = budget / 1000
  return ticketCount;
}

// 당첨 번호 입력받는 함수
export async function getWinningNumbers() {
  const winningNumbersInput = await Console.readLineAsync(
    "\n당첨 번호를 입력해 주세요.\n"
  );
  const winningNumbers = winningNumbersInput.split(",").map(Number);

  validateWinningNumbers(winningNumbers);

  return winningNumbers;
}

// 보너스 번호 입력받는 함수
export async function getBonusNumber(winningNumbers) {
  const bonusNumber = await Console.readLineAsync(
    "\n보너스 번호를 입력해 주세요.\n"
  )

  validateBounsNumber(bonusNumber, winningNumbers);

  return bonusNumber;
}