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
  }

  #validBonusRange(bonus) {
    const number = Number(bonus.trim());
    if (number < 1 || number > 45) {
      throw new Error('보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  #validBonusFormat(bonus) {
    if (Number.isNaN(Number(bonus.trim()))) {
      throw new Error('보너스 번호는 숫자여야 합니다.');
    }
  }
}
