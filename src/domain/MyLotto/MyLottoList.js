import MyLotto from "./MyLotto.js";

class MyLottoList {
  #myLottoList;

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

  get myLottoList() {
    return this.#myLottoList;
  }

}

export default MyLottoList;
