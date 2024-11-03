export default class ValidateBonusNumber {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;

  static validate(winningNumbers, bonusNumber) {
    if (!/^\d+$/.test(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }

    const parsedBonusNumber = parseInt(bonusNumber, 10);

    if (
      parsedBonusNumber < ValidateBonusNumber.MIN_NUMBER ||
      parsedBonusNumber > ValidateBonusNumber.MAX_NUMBER
    ) {
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.");
    }

    if (winningNumbers.includes(parsedBonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}
