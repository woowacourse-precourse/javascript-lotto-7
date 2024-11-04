
export default class LottoValidator {
  static LOTTO_REGEX = /^[0-9]{1,2}(,\s*[0-9]{1,2}){5}$/;
  static BONUS_LOTTO_REGEX = /^[0-9]{1,2}\s*$/;
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;

  static validatorPurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0)
      throw new Error("[ERROR] 구매금액은 1000원 단위이어야합니다.");
  }

  static validatorLottoNumbers(numbers) {
    if (! LottoValidator.LOTTO_REGEX.test(numbers)) {
      throw new Error("[ERROR] 당첨 번호는 총 6개의 최대 2자리 숫자로 ','로 구분되어있어야 합니다.");
    }
  }

  static validatorBonusNumber(bonusNumber) {
    if (! LottoValidator.BONUS_LOTTO_REGEX.test(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 하나의 숫자만 입력되어야 합니다.");
    }
  }

  static validatorSingleNumber(number) {
    if (number < LottoValidator.MIN_LOTTO_NUMBER || number > LottoValidator.MAX_LOTTO_NUMBER) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }  

  static validateDuplicateNumbers(winningLottoNumbers) {
    const uniqueNumbers = new Set(winningLottoNumbers);
    if (uniqueNumbers.size !== winningLottoNumbers.length) {
      throw new Error("[ERROR] 로또 당첨 번호는 중복된 값을 가질 수 없습니다.");
    }
  }
}