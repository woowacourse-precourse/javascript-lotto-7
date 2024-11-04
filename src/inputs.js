import { Console } from "@woowacourse/mission-utils";

/** 구입금액 입력받기 */
export const getPurchaseAmount = async () => {
  const inputAmount = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );
  if (isNaN(inputAmount) || inputAmount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
  }
  const amount = inputAmount / 1000;
  return amount;
};

/** 당첨번호 입력받기 */
export const getWinningNums = async () => {
  const winningNumberInput = await Console.readLineAsync(
    "\n당첨 번호를 입력해 주세요 (쉼표로 구분)\n"
  );
  const winningNumbers = winningNumberInput.split(",").map(Number);
  if (
    winningNumbers.length !== 6 ||
    new Set(winningNumbers).size !== 6 ||
    winningNumbers.some((num) => num < 1 || num > 45)
  ) {
    throw new Error(
      "[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다."
    );
  }
  return winningNumbers;
};
