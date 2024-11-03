export class Bonus {
  #bonus;
  #lottoList;

  constructor(bonus, lottoList) {
    this.#bonus = bonus;
    this.#lottoList = lottoList;
    this.#validate(bonus, lottoList);
  }

  #validate(bonus, lottoList) {}
}
