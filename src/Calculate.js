export class Calculate {
  #lottoList;
  #winningLotto;
  #bonusNumber;

  constructor(lottoList, winningLotto, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
  }
}
