import validateNumber from "./validateNumber.js";

export default function validateBonusNumber(bonusNumber, winningNumberArr) {
  validateNumber(bonusNumber);

  if (winningNumberArr.includes(bonusNumber)) {
    throw new Error(
      "[ERROR] 당첨 번호와 중복되지 않은 숫자를 입력해 주세요.\n"
    );
  }
}
