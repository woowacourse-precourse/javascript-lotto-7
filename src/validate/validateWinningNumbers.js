import validateNumber from "./validateNumber.js";

export default function validateWinningNumbers(winningNumberArr) {
  winningNumberArr.forEach((number) => {
    validateNumber(number);
  });
  if (winningNumberArr.length !== 6) {
    throw new Error("[ERROR] 6개의 숫자를 입력해 주세요.\n");
  }
  if (new Set(winningNumberArr).size !== 6) {
    throw new Error("[ERROR] 중복되지 않은 숫자를 입력해 주세요.\n");
  }
}
