import Lotto from "./Lotto.js";

export function validateBonusNumber(input, winningNumbers) {
  const bonusNumbers = input.split(",").map(Number);
  if (bonusNumbers.length !== 1) {
    throw new Error("[ERROR] 보너스 번호는 하나여야 합니다.");
  }
  if (bonusNumbers.some(isNaN)) {
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  }
  const bonusNumber = bonusNumbers[0];
  Lotto.validateBonusNumber(bonusNumber, new Set(winningNumbers));
  return bonusNumber;
}
