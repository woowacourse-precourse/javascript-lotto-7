export class Validator {
  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount || purchaseAmount.trim() === '') {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해 주세요.');
    }

    if (!/^\d+$/.test(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해 주세요.');
    }

    if (parseInt(purchaseAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.');
    }

    return true;
  }

  validateLottoNumber(numbers) {
    const regex = /^\d+(,\d+)*$/;

    if (!regex.test(numbers)) {
      throw new Error('[ERROR] 당첨 번호는 6개를 쉼표(,)로 구분하여 입력해 주세요.');
    }

    const lottoNumbers = numbers.split(',').map((number) => parseInt(number));

    if (lottoNumbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (lottoNumbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    const set = new Set(lottoNumbers);

    if (set.size !== lottoNumbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않은 숫자로 입력해야 합니다.');
    }

    return true;
  }

  validateBonusNumber(lottoNumbers, bonusNumber) {
    if (
      isNaN(parseInt(bonusNumber)) ||
      bonusNumber.trim() === '' ||
      parseInt(bonusNumber) < 1 ||
      parseInt(bonusNumber) > 45
    ) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.');
    }

    if (lottoNumbers.includes(parseInt(bonusNumber))) {
      throw new Error('[ERROR] 중복된 번호 입니다.');
    }

    return true;
  }
}

export default Validator;
