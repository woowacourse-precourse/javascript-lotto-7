// src/models/BonusNumber.js

import { composeValidator } from '../validations/functional.js';
import {
  isNumber,
  isNotZero,
  isNotEmpty,
  isInRange,
  isNotSameLottoNumber,
} from '../validations/validateRules.js';

export default class BonusNumber {
  #number;

  constructor(number, lottoNumber) {
    this.#number = this.#validateAndInitialize(number, lottoNumber);
  }

  #validateAndInitialize(number, lottoNumber) {
    const validate = composeValidator(
      isNumber,
      isNotZero,
      isNotEmpty,
      isInRange,
      isNotSameLottoNumber(lottoNumber),
    );
    return validate(Number(number));
  }

  getBonusNumber() {
    return this.#number;
  }
}
