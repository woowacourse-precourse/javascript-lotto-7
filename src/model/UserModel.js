export default class UserModel {
  #price;
  #lottos;

  constructor(price) {
    this.#price = price;
    this.#lottos = [];
  }

  getPrice() {
    return this.#price;
  }

  getLottos() {
    return this.#lottos;
  }

  createLotto(lotto) {
    this.#lottos.push(lotto);
  }
}
