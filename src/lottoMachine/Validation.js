export class Validation {
  validatePurchasePrice(purchasePrice) {
    if (purchasePrice === ' ') {
      throw new Error('[ERROR] 값을 입력해 주세요.');
    }

    if (Number.isNaN(Number(purchasePrice)) === true) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }

    if (purchasePrice === '0') {
      throw new Error('[ERROR] 1,000원이상 입력해 주세요.');
    }

    if (Number(purchasePrice) % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원단위로 입력해 주세요.');
    }
  }
}
