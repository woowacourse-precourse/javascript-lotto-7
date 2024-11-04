import MyLotto from "./MyLotto.js";
import Stats from "./Stats.js";

class MyLottoList {
  #myLottoList;
  #stats;

  static create(count) {
    return new MyLottoList([...Array(count)].map(() => MyLotto.create()));
  }

  constructor(myLottoList) {
    this.#myLottoList = myLottoList;
  }

  matchMyLottoList(winningLotto) {
    this.#myLottoList.forEach((myLotto) => {
      myLotto.matchMyLotto(winningLotto);
    });
  }

  compileStats() {
    this.#stats = new Stats(this.#myLottoList);
  }

  get myLottoList() {
    return this.#myLottoList;
  }

  get stats() {
    return this.#stats;
  }
}

export default MyLottoList;
