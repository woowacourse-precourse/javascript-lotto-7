import validateNumber from "./validateNumber";

export default function validateWinningNumbers(winningNumberArr) {
  if (winningNumberArr.length !== 6) {
    throw new Error("[ERROR] 6개의 숫자를 입력해 주세요.");
  }
  if (new Set(winningNumberArr).size !== 6) {
    throw new Error("[ERROR] 중복되지 않은 숫자를 입력해 주세요.");
  }
  winningNumberArr.forEach((number) => {
    validateNumber(number);
  });
}
