import { ERROR } from './constant.js';

export class Bonus {
  #bonus;
  #lottoList;

  constructor(bonus, lottoList) {
    this.#bonus = bonus;
    this.#lottoList = lottoList;
    this.#validate(bonus, lottoList);
  }

  #validate(bonus, lottoList) {
    this.#validBonusRange(bonus);
    this.#validBonusFormat(bonus);
    this.#validBonusDuplication(bonus, lottoList);
  }

  #validBonusRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw Error(ERROR.message);
    }
  }

  #validBonusFormat(bonus) {
    if (Number.isNaN(bonus)) {
      throw Error(ERROR.message);
    }
  }

  #validBonusDuplication(bonus, lottoList) {
    if (lottoList.includes(bonus)) {
      throw Error(ERROR.message);
    }
  }
}
