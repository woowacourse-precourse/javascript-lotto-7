export class Result {
  #result;

  constructor(match, price, count) {
    this.#result = {
      match,
      price,
      count
    }
  }

  addCount() {
    this.#result.count++
  }

  getResult() {
    return this.#result;
  }
}
