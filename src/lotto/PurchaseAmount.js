// src/models/PurchaseAmount.js

import { magicNumber } from '../constants/index.js';
import { composeValidator } from '../validations/functional.js';
import {
  isNumber,
  isNotZero,
  isNotEmpty,
  isRightUnit,
} from '../validations/validateRules.js';

export default class PurchaseAmount {
  #purchaseAmount;

  #purchaseCnt;

  constructor(purchaseAmount) {
    // 유효성 검사기를 조합하여 입력값을 검증
    const validate = composeValidator(
      isNumber,
      isNotZero,
      isNotEmpty,
      isRightUnit,
    );
    validate(purchaseAmount);

    this.#purchaseAmount = Number(purchaseAmount);
    this.#purchaseCnt = this.createPurchaseCnt(this.#purchaseAmount);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getPurchaseCnt() {
    return this.#purchaseCnt;
  }

  createPurchaseCnt(purchaseAmount) {
    return purchaseAmount / magicNumber.BASE;
  }
}
