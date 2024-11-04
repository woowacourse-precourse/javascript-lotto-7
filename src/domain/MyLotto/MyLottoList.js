import MyLotto from "./MyLotto.js";

class MyLottoList {
  #myLottoList;
  #stats;

  static create(count) {
    return new MyLottoList([...Array(count)].map(() => MyLotto.create()));
  }

  constructor(myLottoList) {
    this.#myLottoList = myLottoList;
  }

  get myLottoList() {
    return this.#myLottoList;
  }
}

export default MyLottoList;
